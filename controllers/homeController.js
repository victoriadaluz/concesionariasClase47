let db = require('../data/dataBase')





module.exports = {
    index: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
            *******************
            bienvenidos a nuestra página
            ************************
            empresa lider en el mercado


            ==========================
            Nuestras sucursales
            `)
            db.forEach(sucursal => {
                res.write(`
                ${sucursal.sucursal}
                `)
            })
            res.end()
    }
}