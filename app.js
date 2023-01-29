const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


/* enrutador */
const mainRouter =require('./routers/mainRouter');


/*  */
app.use(express.static(path.join(__dirname, 'public')));

/*middleware rutas */
app.use('/', mainRouter);



app.listen(PORT, ()=>{
    console.log('Servidor funcionando: http://localhost:3000 ')
})