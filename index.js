let express = require('express');
let app = express();

/**Enrutadores*/
let autosRouter = require('./routes/autos')
let homeRouter = require('./routes/home')
let marcasRouter = require('./routes/autos')
let sucursalesRouter = require('./routes/sucursales')


/**RUTAS**/
/**que el path esté en la ruta raíz y que enrutador vamos a pasar
 * para cada una de ellas
*/
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter)
app.use('/autos', autosRouter)


app.listen(3000, () => { console.log("Servidor levantado")})