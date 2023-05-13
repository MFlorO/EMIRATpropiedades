const { Usuario } = require("../database/db");


//----------- GET -----------//

exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ 
            order: [['nombre', 'ASC']],
            where : { isAdmin: false }
         })

        usuarios          
        ? res.status(201).json({ ok: true, usuarios })
        : res.json({ ok: false, status: `No se encontraron todos los usuarios` })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

exports.getById = async (req, res) => {
    try {
        const user = await Usuario.findByPk(req.params.uid);
        if (user) return res.json(user);
        return res.status(404).json({ status: 404, message: "No se encontró el usuario con ese uid" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};




function validaciones( email ) {

    const emailTest = new RegExp( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i );
    if (!email || !emailTest.test(email)) return false;

    return true;
}


exports.createUser = async (req, res) => {

    const { uid, displayName, email, isAdmin } = req.body;

    try {
        
        if (!validaciones(email))
        return res.status(400).json({status: 400, message: 'Error con las validaciones'});

        const usuario = await Usuario.findOrCreate({
            where: { uid: uid },
            defaults: { 
                nombre: displayName?.toLowerCase(), 
                email: email.toLowerCase(), 
                isAdmin 
            }
        });

        return res.status(201).json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};