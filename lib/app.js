const express = require('express');

const app = express();

const boydParse = require('body-parser');
const { urlencoded } = require('express');
const Config = require('./config.json');
 const RoutePaths = require('./constants/route_paths');

app.use(express.json());
app.use(urlencoded({extended: true}));

// ------------------------------------------------------------
// Import Routers
// ------------------------------------------------------------

const userRoutes = require('./routers/user');
const homeRoutes = require('./routers/home');
// ------------------------------------------------------------
// Initialize Routers
// ------------------------------------------------------------
app.use(RoutePaths.USER_BASE,userRoutes);
app.use(homeRoutes);



// ------------------------------------------------------------
// Starting server
// ------------------------------------------------------------
app.listen(Config.port,()=>{
    console.log(`Listeninig on: ${Config.port}`);
})