//Esercizio parte 1
// a.Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
//Tutte le risposte saranno in json.

// b. All'interno creare le seguenti rotte:
// / - index: ritornerà un html con una ul che stamperà la lista dei post
// /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post

// c. Scrivere tutte le funzioni delle rotte nel controller dedicato

// d. Registrare il router dentro app.js con il prefisso posts/.

const express = require('express'); //importa express su questo file perchè ogni file su node.js è isolato
const router = express.Router(); //crea effettivamente il router



const postsController = require('../controllers/postsControllers'); //Importa tutte le funzioni del controller(definite in controller/postsController) dentro il file (Router/posts.js) per consentire alle rotte specifiche (definite qui in Routers/posts.js) di usare la logica del controller.


router.get('/', postsController.index); //rotta per avere tutti mostrare tutti i post


router.get('/:slug', postsController.show); //rotta per visualizzare post specifico

module.exports = router;