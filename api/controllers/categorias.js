const { Categoria, Inmueble } = require("../database/db");



// ------------ GET ------------ //

exports.getCategorias = async(req, res) => {

    try {

        const categorias = await Categoria.findAll({ 
            order: [['nombre', 'ASC']],
            include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                model: Inmueble,
                through: { attributes: [] }
             },
            ]
        });
      
        if (categorias)  return res.status(201).json({
            ok: true,
            status: "Se encontraron todas las categorías",
            categorias
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontraron las categorías'
        });


    } catch (error){

        res.status(500).json({
            ok: false,
            status: "Comunicarse con el administrador",
        })

        console.log(error)
    }
}



// ------------ POST ------------ //


exports.crearCategoria = async(req, res) => {

    const { nombre } = req.body


    const nombreMinuscula = nombre.toLowerCase()

    try {

        const nombreRepetido = await Categoria.findOne({ where: {nombre: nombreMinuscula} })


        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe una categoría con ese nombre",
            })
        }

    
        let [categoria, created] = await Categoria.findOrCreate({
            where: { nombre: nombreMinuscula },
            // defaults: { nombre }
        });


        if(created) {
            return res.status(201).json({
                ok: true,
                status: `categoría [${categoria.nombre}] creada con éxito`,
                categoria
            })
        }
        
        return res.status(400).json({
            ok: false,
            status: `No se pudo crear la categoria ${categoria.nombre}`,
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


exports.editCategoria = async(req, res) => {

    const { id, nombre } = req.body
    
    const nombreMinuscula = nombre.toLowerCase()

    try {

        const categoriaExistente = await Categoria.findByPk(id)
        const nombreRepetido = await Categoria.findOne({ where: {nombre: nombreMinuscula} })
    
        if(categoriaExistente === null) {
            return res.status(400).json({
                ok: false,
                status: `No se encontró la categoría ${c}`,
            })
        }

        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe una categoría con ese nombre",
            })
        }

    
        await Categoria.update({ 
            nombre: nombreMinuscula
        },
        { where: {id:id}  }
        );


         return res.status(201).json({
            ok: true,
            status: `categoría [ ${c} ] modificada con éxito`,
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



exports.deleteCategoria = async(req, res) => {

    const { id } = req.body

    try {

        const categoriaExistente = await Categoria.findByPk(id)
    
        if(categoriaExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró la categoría",
            })
        }

        await Categoria.destroy( { where: {id:id} } );


        return res.status(201).json({
            ok: true,
            status: "categoría eliminada con éxito",
        })
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}




// ----- POST CATEGORIA ID PRODUCTO ------- //    AGREGAR CATEOGRIAS A CADA PRODUCTO

exports.postCategoria = async(req, res) => {

    const { codigo } = req.params //codigo inmueble

    const { id } = req.body //id cateogria

    try {

        const productoExistente = await Inmueble.findOne({ 
            where: { codigo },
            order: [['nombre', 'ASC']],
            include: [{   
                model: Categoria,
                order: [['nombre', 'ASC']],
                through: { attributes: [] }
             },
            ]
        });

    
        if(productoExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el producto",
            })
        }


        id.map(async c => { //UNIR CATEGORIA CON PRODUCTO

                if (c !== null || c !== undefined) {
    
                    const categoria = await Categoria.findByPk(c)
    
                    if (categoria) productoExistente.addCategoria(categoria)
                }
    
            })
            


        return res.status(201).json({
            ok: true,
            status: "categoría agregada con éxito al producto",
        })
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}



// ------- PUT CATEGORIA ID PRODUCTO--------------//



exports.putCategoria = async(req, res) => {

    const { codigo } = req.params

    const { id } = req.body

    try {

        const productoExistente = await Inmueble.findOne({ 
            where: { codigo },
            order: [['nombre', 'ASC']],
            include: [{   
                model: Categoria,
                order: [['nombre', 'ASC']],
                through: { attributes: [] }
             },
            ]
        });

    
        if(productoExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el producto",
            })
        }


        id.map(async c => { //UNIR CATEGORIA CON PRODUCTO

                if (c !== null || c !== undefined) {
    
                    const categoria = await Categoria.findByPk(c)
    
                    if (categoria) productoExistente.removeCategoria(categoria)
                }
    
            })
            


        return res.status(201).json({
            ok: true,
            status: "categoría agregada con éxito al producto",
        })
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}