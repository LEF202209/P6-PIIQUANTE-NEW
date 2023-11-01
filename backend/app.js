//****************************************************************************************//
//**********************************       app.js             ****************************//
//****************************************************************************************//
//importation du module de variable d'environnement
require('dotenv').config();

// importer express module
const express = require('express');

const userRoutes=require('./routes/user');
const sauceRoutes=require('./routes/sauce');

// créer une application express
const app = express();
app.use(express.json());

// importer mongoose
const mongoose = require('mongoose');

// variables d'environnement
const userName= process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const accessMongo = process.env.DB_ACCESSMONGO


//  cors : déclaration des autorisations //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// se connecter à Mongoose
mongoose.connect(`mongodb+srv://${userName}:${password}@${accessMongo}/OPENCLASSROOMS?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('Connexion à MongoDB réussie !'))
.catch(()=> console.log('Connexion à MongoDB échouée!'));

app.use('/api/auth',userRoutes);
app.use('/api/sauces',sauceRoutes);

// exporter l'applicat° pour qu'on puisse y accéder depuis les autres fichiers notamment notre server node //
module.exports = app;