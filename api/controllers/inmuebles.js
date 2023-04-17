const { Op } = require("sequelize");
const { Inmueble, Categoria } = require("../database/db");




// ------------ GET ------------ //


exports.getInmueble = async (req, res) => {

    const { q } = req.query;     //Si busco algo, trae lo que busco. Sino Todos
 
    try {
        
        if (q !== "") {
            
            let where = {};

            if (isNaN(q) === false ) { // Si el valor de búsqueda es un número, buscar por id
                where = { id: parseInt(q) };
            } else { // De lo contrario, buscar por nombre
                where = { nombre: { [Op.like]: `%${q}%` } };
            }

            const inmueble = await Inmueble.findAll({
                order: [['id', 'ASC']],
                where: where, 
                include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                    model: Categoria,
                    attributes: ['id', "nombre"],
                    through: { attributes: [] }
                 }
                ]
            })

            if (inmueble.length > 0) {
                
                return res.status(201).json({
                    ok: true,
                    status: "Inmuebles segun la busqueda",
                    inmueble
                })

            } else {

                const inmueble = await Inmueble.findAll({
                    order: [['id', 'ASC']],
                    include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                        model: Categoria,
                        attributes: ['id', "nombre"],
                        through: { attributes: [] }
                     }
                    ]
                });
        
                if (inmueble) return res.status(201).json({
                    ok: true,
                    status: "Todos los inmuebles",
                    inmueble
                })
        
                return res.status(400).json({
                    ok: false,
                    status: 'No se encontraron inmuebles'
                });
            }

            
        } else {

            const inmueble = await Inmueble.findAll({
                order: [['id', 'ASC']],
                include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                    model: Categoria,
                    attributes: ['id', "nombre"],
                    through: { attributes: [] }
                 }
                ]
            });
    
            if (inmueble) return res.status(201).json({
                ok: true,
                status: "Todos los inmuebles",
                inmueble
            })
    
            return res.status(400).json({
                ok: false,
                status: 'No se encontraron inmuebles'
            });

        }
    




    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
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



// --------- GET FILTRO --------- //



exports.getProductosByFilter = async (req, res) => {

    const { idcategoria, idMV } = req.query

    try {

        const productos = await Producto.findAll({
            order: [['nombre', 'ASC']],

            include: [Categoria, Modelo],
            where: {
                [Op.or]: [
                    { "$categoria.id$": Number(idcategoria) },
                    { "$modelos.id$": Number(idMV) },  
                ],
            },
        });

        console.log(productos)

        if (productos) return res.status(201).json({
            ok: true,
            status: "getProducto",
            productos
        })

        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los productos'
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


function validaciones( nombre , descripcion, precio, imagen, fechaPublicacion, direccion ) {

    if (!nombre || nombre === undefined || nombre.length > 300) return false;
    if (!descripcion || descripcion === undefined || descripcion.length > 5200)
        return false;
    if (!precio || precio < 0 || precio === undefined) return false;
    // if (!moneda) return false;
    if (!imagen || imagen === undefined) return false;
    if (!fechaPublicacion || fechaPublicacion === undefined) return false;
    if (!direccion || direccion === undefined) return false;

    return true;
}





exports.crearInmueble = async (req, res) => {

    const { id, nombre, descripcion, precio, moneda, imagen, fechaPublicacion, direccion } = req.body


    if ( !validaciones( nombre , precio, descripcion, imagen, fechaPublicacion, direccion ) )  
    return res.status(400).json({ ok: false, status: "Error con las validaciones" });



    try {

        const codigoRepetido = await Inmueble.findByPk(id)


        if (codigoRepetido) {
            return res.status(400).json({ ok: false, status: "ya existe un inmueble con ese id" })
        }

        const inmueble = await Inmueble.create({
            codigo: id,
            nombre: nombre.toLowerCase(),
            precio,
            moneda,
            descripcion: descripcion.toLowerCase(),
            imagen,
            fechaPublicacion,
            direccion
        });

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
