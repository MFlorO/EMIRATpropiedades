const { Op } = require("sequelize");
const { Inmueble, Categoria } = require("../database/db");
const { API_KEY_GOOGLEMAPS, UPLOAD_PRESET } = require("./../env");
const { cloudinary } = require("../utils/cloudinary");
const { Client } = require("@googlemaps/google-maps-services-js");





exports.getInmuebles = async ( where = {}, orden = [['id', 'ASC']],  ) => {

    try {            

        const inmueble = await Inmueble.findAll({
            order: orden ,
            where: where,
            include: [{
                model: Categoria,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
            }
            ]
        });

        return inmueble

    } catch (error) {
        return []
    }
}


exports.getInmueblesCategoria = async ( c, orden = [['id', 'ASC']], where = {}) => {

    try {

        const inmueble = await Inmueble.findAll({
            order: orden,
            where: where,
            include: [{
                model: Categoria,
                where: { nombre: c.toLowerCase() },
                attributes: ['id', "nombre"],
                through: { attributes: [] }
            }
            ]
        });

        return inmueble

    } catch (error) {
        return []
    }
}


exports.search = async ( c, s, orden ) => {

    try {

        let where = {};

        if (isNaN(s) === false) { // Si el valor de búsqueda es un número, buscar por id
            where = { id: parseInt(s) };
        } else { // De lo contrario, buscar por nombre
            where = { nombre: { [Op.like]: `%${s}%` } };
        }

        let inmueble = []

        if(c !== undefined && c !== 'todos'){
            inmueble = await exports.getInmueblesCategoria(c, orden, where)
        } else {
            inmueble = await exports.getInmuebles(where, orden)
        } 

        return inmueble

    } catch (error) {
        []
    }
}


exports.getTodosLosInmuebles = async (req, res) => {

    const { paginaActual = 0, items = 5 } = req.query;

    try {

        const inmueble = await exports.getInmuebles()

        let filteredInmueble = inmueble

        const cantidadTotal = filteredInmueble.length
        const cantidadPaginas = Math.ceil(cantidadTotal / items)
        const set = parseInt(paginaActual) * items
        const limite = set + parseInt(items)

        let filteredInmueble2 = filteredInmueble.slice(set, limite)

        inmueble.length === 0
            ? res.json({ ok: false, status: `No se encontraron todos los inmuebles` })
            : res.status(201).json({
                ok: true,
                status: `Se encontraron todos los inmuebles`,
                cantidadTotal,
                cantidadPaginas,
                inmuebles: filteredInmueble2,
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, status: "comunicarse con el administrador" })
    }
}


exports.getTodosLosInmueblesCategoria = async (req, res) => {

    const { c, paginaActual = 0, items = 5 } = req.query;

    try {

        const inmueble = await exports.getInmueblesCategoria(c)

        let filteredInmueble = inmueble

        const cantidadTotal = filteredInmueble.length
        const cantidadPaginas = Math.ceil(cantidadTotal / items)
        const set = parseInt(paginaActual) * items
        const limite = set + parseInt(items)

        let filteredInmueble2 = filteredInmueble.slice(set, limite)

        inmueble.length === 0
            ? res.json({ ok: false, status: `No se encontraron los inmuebles con la categoría: ${c}` })
            : res.status(201).json({
                ok: true,
                status: `se encontraron todos los inmuebles con la categoría: ${c}`,
                cantidadTotal,
                cantidadPaginas,
                inmuebles: filteredInmueble2,
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, status: "comunicarse con el administrador" })
    }
}




// -------- GET SEARCH INMUEBLE ------------ //

exports.getTodosSearch = async (req, res) => {

    const { c, s, paginaActual = 0, items = 5 } = req.query

    try {

        let inmueble = await exports.search(c,s)

        let filteredInmueble = inmueble

        const cantidadTotal = filteredInmueble.length
        const cantidadPaginas = Math.ceil(cantidadTotal / items)
        const set = parseInt(paginaActual) * items
        const limite = set + parseInt(items)

        let filteredInmueble2 = filteredInmueble.slice(set, limite)

        filteredInmueble2.length === 0
            ? res.json({ ok: false, status: `No se encontraron resultados de la busqueda: ${s}` })
            : res.status(201).json({
                ok: true, status: `Se encontraron resultados de la busqueda: ${s}`,
                cantidadTotal,
                cantidadPaginas,
                inmuebles: filteredInmueble2,
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, status: "comunicarse con el administrador" })
    }
}



exports.getInmueblesOrdenadosPorPrecio = async (req, res) => {

    const { c, s, paginaActual = 0, items = 5 } = req.query;
    const { ordenar } = req.params

    try {

        let orden = []

        if(ordenar == 'asc') orden = [['precio', `${ordenar.toUpperCase()}`]]
        if(ordenar == 'desc') orden = [['precio', `${ordenar.toUpperCase()}`]]
        if(ordenar == 'default') orden = [['id', 'ASC']] 


        let inmueble

        if (c !== undefined && c !== 'todos') {
            if (s !== undefined) {
                inmueble = await exports.search(c,s, orden)
            } else {
                inmueble = await exports.getInmueblesCategoria(c, orden)
                console.log('inmueble', inmueble)
            }
        } 
        
        if (c === undefined ){
            let where = {}

            if (s !== undefined) {
                inmueble = await exports.search(c,s, orden)
            } else {
                inmueble = await exports.getInmuebles(where,orden)
            }
        }


        let filteredInmueble = inmueble

        const cantidadTotal = filteredInmueble.length
        const cantidadPaginas = Math.ceil(cantidadTotal / items)
        const set = parseInt(paginaActual) * items
        const limite = set + parseInt(items)

        let filteredInmueble2 = filteredInmueble.slice(set, limite)

        filteredInmueble2.length === 0
            ? res.json({ ok: false, status: `No se pudo ordenar` })
            : res.status(201).json({
                ok: true, status: `Se pudo ordenar`,
                cantidadTotal,
                cantidadPaginas,
                inmuebles: filteredInmueble2,
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, status: "comunicarse con el administrador" })
    }
};






//-------- GET MODELOS SEGUN EL ID DEL PRODUCTO --------- //


exports.getInmuebleId = async (req, res) => {

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

        if (inmuebleId) return res.status(201).json({
            ok: true,
            status: "Inmueble por id",
            inmuebleId
        })

        return res.status(400).json({
            ok: false,
            status: 'No se encontro el Inmueble según el id'
        });

    } catch (error) {

        console.log(error)

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
    }
}



// --------- GET_GOOGLE_MAPS --------- //






const client = new Client({});


// Obtener la ubicación del inmueble
exports.direccionGoogleMaps = async (req, res) => {

    const { direccion } = req.params

    try {
        const respuesta = await client.geocode({
            params: {
                address: direccion,
                key: API_KEY_GOOGLEMAPS
            },
            timeout: 1000
        });
        const { lat, lng } = respuesta.data.results[0].geometry.location;
        res.json({ latitud: lat, longitud: lng });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al obtener la ubicación de la dirección' });
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


function validaciones(nombre, descripcion, precio, imagen, fechaPublicacion, direccion, idCategoria) {

    if (!nombre || nombre === undefined || nombre.length > 300) return false;
    if (!descripcion || descripcion === undefined || descripcion.length > 5200)
        return false;
    if (!precio || precio < 0 || precio === undefined) return false;
    // if (!moneda) return false;
    const patternURL = new RegExp(
        /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
    );
    if (!imagen || imagen === undefined || !patternURL.test(imagen)) return false;
    if (!fechaPublicacion || fechaPublicacion === undefined) return false;
    if (!direccion || direccion === undefined) return false;
    if (!idCategoria || idCategoria === undefined) return false;

    return true;
}


exports.postCloudinary = async function ( file ) {

 try {

    console.log('cloudinary', file)
        
    const urls = [];

    for (const f of file) {
        
        const uploadResponse = await cloudinary.uploader.upload(f.path, {
              upload_preset: UPLOAD_PRESET,
        });

        urls.push(uploadResponse.url);
    }
    
    console.log('url', urls)

    return urls

 } catch (error) {
    throw error;
 }
};



exports.cloudinary = async function (req, res) {
    try {
        const fileStr = req.body.data;

        const urls = [];

        for (const f of fileStr) {
        
           const uploadResponse = await cloudinary.uploader.upload(f, {
              upload_preset: UPLOAD_PRESET,
          });

        urls.push(uploadResponse.url);
       }
      
       console.log('url', urls)

        //    return urls

        // const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        //     upload_preset: UPLOAD_PRESET
        // });

        // console.log(uploadResponse.url)

        res.status(200).json({ url: urls });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


exports.crearInmueble = async (req, res) => {

    const { nombre, descripcion, precio, moneda, fechaPublicacion, direccion, destacado, status, antiguedad, mt2, dormitorios, baños, cochera, pileta, imagen, idCategoria } = req.body

    // if (!validaciones(nombre, precio, descripcion, imagen, fechaPublicacion, direccion, idCategoria))
    //     return res.status(400).json({ ok: false, status: "Error con las validaciones" });

    const inmueble = await Inmueble.create({
        nombre: nombre.toLowerCase(),
        precio,
        moneda,
        descripcion: descripcion.toLowerCase(),
        // imagen,
        fechaPublicacion,
        direccion,
        destacado,
        status,
        antiguedad,
        mt2,
        dormitorios,
        baños,
        cochera,
        pileta
    });


    try {

       const categoria = await Categoria.findOne({
                where: { id: idCategoria }
            })

        if (categoria) {
            inmueble.addCategoria(categoria)
        }

        return res.status(201).json({
            ok: true,
            status: "Producto creado con éxito",
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}














// // ------------ PUT ------------ //


// exports.editProducto = async (req, res) => {

//     const { id, nombre, precio, moneda, descripcion, imagen, fechaPublicacion, direccion, idCategoria } = req.body

//     const nombreMinuscula = nombre.toLowerCase()

//     if (!validaciones(id, nombre, precio, descripcion, imagen, fechaPublicacion, direccion, idCategoria))
//         return res.status(400).json({ ok: false, status: "Error con las validaciones" });


//     try {

//         const inmueble = await Inmueble.findByPk(id)
//         const nombreRepetido = await Inmueble.findOne({ where: { nombre: nombreMinuscula } })

//         if (inmueble === null) {
//             return res.status(400).json({
//                 ok: false,
//                 status: "No se encontró el producto",
//             })
//         }

//         if (nombreRepetido) {
//             return res.status(400).json({
//                 ok: false,
//                 status: "ya existe un producto con ese nombre",
//             })
//         }


//         inmueble.nombre = nombreMinuscula;
//         inmueble.descripcion = descripcion;
//         inmueble.precio = precio;
//         inmueble.moneda = moneda;
//         inmueble.imagen = imagen;
//         inmueble.fechaPublicacion = fechaPublicacion;
//         inmueble.direccion = direccion

//         await inmueble.save()

//         idCategoria.map(async c => { //UNIR CATEGORIA CON PRODUCTO

//             if (c !== null || c !== undefined) {

//                 const categoria = await Categoria.findByPk(c)

//                 if (categoria) inmueble.addCategoria(categoria)
//             }
//         })


//         return res.status(201).json({
//             ok: true,
//             status: "producto modificado con éxito",
//             producto
//         })


//     } catch (error) {

//         res.status(500).json({
//             ok: false,
//             status: "comunicarse con el administrador",
//         })
//         console.log(error)
//     }
// }




// ------------ DELETE ------------ //



exports.deleteInmueble = async (req, res) => {

    const { id } = req.params
    
    try {

        const productoExistente = await Inmueble.findByPk(id)

        if (productoExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el inmueble",
            })
        }

        await Inmueble.destroy({ where: { id } });


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




