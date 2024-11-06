//Esercizio parte 1
// a.Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
//Tutte le risposte saranno in json.

// b. All'interno creare le seguenti rotte:
// / - index: ritornerà un html con una ul che stamperà la lista dei post
// /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post

// c. Scrivere tutte le funzioni delle rotte nel controller dedicato

// d. Registrare il router dentro app.js con il prefisso posts/.

const express = require('express');
const postsRouter = require('./routers/posts');
const app = express();


app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});