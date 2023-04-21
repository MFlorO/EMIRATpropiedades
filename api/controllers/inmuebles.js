const { Op } = require("sequelize");
const { Inmueble, Categoria } = require("../database/db");




exports.getTodosLosInmuebles = async () => {
    try{

        const inmueble = await Inmueble.findAll({
            order: [['id', 'ASC']],
            include: [{        
                model: Categoria,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
             }
            ]
        });

        return inmueble

    }catch{
        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}


exports.getInmueble = async ( c ) => {
 
    try {
        
            const inmueble = await Inmueble.findAll({
                order: [['id', 'ASC']],
                include: [{         
                    model: Categoria,
                    where: { nombre: { [Op.like]: `%${c}%` } },
                    attributes: ['id', "nombre"],
                    through: { attributes: [] }
                 }
                ]
            });

            return inmueble

    } catch (error) {

        console.log(error)
        return undefined;
    }
}



// -------- GET SEARCH INMUEBLE ------------ //

exports.getSearch = async (req, res) => {

  const { search } = req.query;    

try {

    let where = {};

    if (isNaN(search) === false ) { // Si el valor de búsqueda es un número, buscar por id
    where = { id: parseInt(search) };
    } else { // De lo contrario, buscar por nombre
    where = { nombre: { [Op.like]: `%${search}%` } };
    }


    const resultados = await Inmueble.findAll({
        order: [['id', 'ASC']],
        where: where,
        include: {
                    model: Categoria,
                    attributes: ['id', "nombre"],
                    through: { attributes: [] }
            }
       })

    resultados.length === 0 
    ? res.status(500).json({ ok: false, status: 'No se encontraron inmuebles en la busqueda'  })
    : res.status(201).json({
        ok: true,
        status: "Inmuebles segun la busqueda",
        resultados
    })

       
} catch (error) {
    console.log(error)
    return undefined;
}
}




//-------- GET MODELOS SEGUN EL ID DEL PRODUCTO --------- //


exports.getInmuebleId = async(req, res) => {

    const { id } = req.params  //Código del inmueble

    try {

        const inmuebleId = await Inmueble.findOne({
            where: { id },
            include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                model: Categoria,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
             },
            ]
        });
      
        if (inmuebleId)  return res.status(201).json({
            ok: true,
            status: "Inmueble por id",
            inmuebleId
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontro el Inmueble según el id'
        });

    } catch (error){

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}



// --------- GET FILTRO CATEGORIA --------- //



exports.getProductosByFilter = async (req, res) => {

    const { idcategoria } = req.params

    try {

        const inmueble = await Inmueble.findAll({
            order: [['nombre', 'ASC']],
            include: Categoria,
            where: {
               "$categoria.id$": Number(idcategoria)
            },
        });

        console.log(inmueble)

        if (inmueble) return res.status(201).json({
            ok: true,
            status: "inmueble segun categoria",
            inmueble
        })

        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los inmuebles según categoria'
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}


// ------------ POST ------------ //


function validaciones( nombre , descripcion, precio, imagen, fechaPublicacion, direccion, idCategoria ) {

    if (!nombre || nombre === undefined || nombre.length > 300) return false;
    if (!descripcion || descripcion === undefined || descripcion.length > 5200)
        return false;
    if (!precio || precio < 0 || precio === undefined) return false;
    // if (!moneda) return false;
    if (!imagen || imagen === undefined) return false;
    if (!fechaPublicacion || fechaPublicacion === undefined) return false;
    if (!direccion || direccion === undefined) return false;
    if (!idCategoria || idCategoria === undefined) return false;

    return true;
}





exports.crearInmueble = async (req, res) => {

    const { nombre, descripcion, precio, moneda, imagen, fechaPublicacion, direccion, idCategoria } = req.body


    if ( !validaciones( nombre , precio, descripcion, imagen, fechaPublicacion, direccion, idCategoria ) )  
    return res.status(400).json({ ok: false, status: "Error con las validaciones" });

    const inmueble = await Inmueble.create({
        nombre: nombre.toLowerCase(),
        precio,
        moneda,
        descripcion: descripcion.toLowerCase(),
        imagen,
        fechaPublicacion,
        direccion
    });


    try {

                   
        idCategoria.map(async i => { 
            
            const categoria = await Categoria.findOne({
                  where:{  id: i  } 
                }) 

            
            if (categoria) {
                categoria.addInmueble(inmueble) 
            }
        })


        return res.status(201).json({
            ok: true,
            status: "Producto creado con éxito",
            inmueble
        })


    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}


// ------------ PUT ------------ //


exports.editProducto = async(req, res) => {

    const { id, nombre , precio, moneda, descripcion, imagen, fechaPublicacion, direccion, idCategoria } = req.body

    const nombreMinuscula = nombre.toLowerCase()

    if ( !validaciones( id, nombre, precio, descripcion, imagen, fechaPublicacion, direccion, idCategoria ) )  
    return res.status(400).json({ ok: false, status: "Error con las validaciones" });

    
    try {

        const inmueble = await Inmueble.findByPk(id)
        const nombreRepetido = await Inmueble.findOne({ where: {nombre: nombreMinuscula} })
    
        if(inmueble === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el producto",
            })
        }

        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un producto con ese nombre",
            })
        }

    
        inmueble.nombre = nombreMinuscula;
        inmueble.descripcion = descripcion;
        inmueble.precio = precio;
        inmueble.moneda = moneda;
        inmueble.imagen = imagen;
        inmueble.fechaPublicacion = fechaPublicacion;
        inmueble.direccion = direccion

        await inmueble.save()
 
        idCategoria.map(async c => { //UNIR CATEGORIA CON PRODUCTO

            if (c !== null || c !== undefined) {

                const categoria = await Categoria.findByPk(c)

                if (categoria) inmueble.addCategoria(categoria)
            }
        })


         return res.status(201).json({
            ok: true,
            status: "producto modificado con éxito",
            producto
        })
        

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}




// ------------ DELETE ------------ //



exports.deleteInmueble = async(req, res) => {

    const { id } = req.body

    try {

        const productoExistente = await Inmueble.findByPk(id)
    
        if(productoExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el inmueble",
            })
        }

        await Inmueble.destroy( { where: {id} } );


        return res.status(201).json({
            ok: true,
            status: "Inmueble eliminado con éxito",
        })
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}
