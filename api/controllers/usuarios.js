const { Usuario } = require("../database/db");


//----------- GET ALL -----------//
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


//----------- GET BY UID-----------//

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


//----------- POST -----------//

function validaciones( email ) {

    const emailTest = new RegExp( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i );
    if (!email || !emailTest.test(email)) return false;

    return true;
}


exports.createUser = async (req, res) => {

    const { uid, email, displayName, isAdmin } = req.body;

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

//----------- PUT -----------//
exports.updateActiveUser = async (req, res) => {

    const { uid } = req.params;

    console.log('back-uid', uid)

    try {
        let usuario = await Usuario.findByPk(uid);

        if (usuario) {

            console.log('back-usuario-antes', usuario.isActive)

            usuario.isActive = usuario.isActive ? false : true;
            await usuario.save();

            console.log('back-usuario-despues', usuario.isActive)
        }
        return res.status(204).json({ok: true});
        // res.json({ ok: false, status: "No se encontró el usuario con ese uid" })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};





//----------- DELETE -----------//


exports.deleteUser = async (req, res) => {

    const { uid } = req.params;

    try {
        if (uid) {

            await Review.destroy({where: { uid: uid }});

            res.json({ok: true, status: "usuario eliminado con éxito"});

        } else {
            res.status(404).json({ok: false, status: "No se encontró el usuario con ese uid"})
        }
    } catch (error) {
    res.send({msg:"The data cannot be deleted"});
 }
}
   