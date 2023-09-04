const express = require('express');
const app = express();
const port = 3000;

const Routes = require('./routes')

// app.get('/', (req, res) => {
//     res.send('Respuesta al get: Hola Mundo');
// });


app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);

app.listen(port, () => {
    console.log(`Aplicacion d ejemplo en el puerto:  ${port}`);
});


