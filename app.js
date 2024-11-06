//Esercizio parte 1
// a.Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
//Tutte le risposte saranno in json.

// b. All'interno creare le seguenti rotte:
// / - index: ritornerà un html con una ul che stamperà la lista dei post
// /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post

// c. Scrivere tutte le funzioni delle rotte nel controller dedicato

// d. Registrare il router dentro app.js con il prefisso posts/.

//Esercizio parte 2
// e. Per il nostro blog, concentriamoci sul creare una rotta:
//la rotta dovrá rispondere al verbo POST e delegare un metodo store del controller dei posts per effettuare le operazioni di creazione della risorsa.
// f. Questa dovrà riceve i dati in formato json e dovrà restituire l'elenco dei posts in formato json incluso il nuovo elemento appena creato
// g. Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
//Testare le rotte tramite Postman.

//Esercizio parte 3
//Per il nostro blog, concentriamoci sul creare 2 rotte:
// h. /:id [PUT] - rotta update del crud che riceverà dei dati e modificherá un post esistente. Questa dovrà riceve i dati in formato json e dovrà restituire il json dell’elemento appena creato.
// i. /:id [DELETE] - rotta destroy del crud che dovrà restituire un 404 nel caso non sia stato trovato un post corrispondente.
// l. Restituire come responso la nuova array escluso il post eliminato
// m. Testare le rotte tramite Postman.

const express = require('express')
const app = express()




//per visualizzare tutti i cibi
const menu = require('./db/posts.js')

app.get('/posts', (req, res) => {
  res.json({ data: posts, count: posts.length })
});


//per visualizzare un cibo
app.get('/posts/:id', (req, res) => {


  const post = menu.find((post) => post.id === parseInt(req.params.id))
  if (!post) {
    return res.status(404).json({ error: "No post found with that id" })
  }
  return res.status(200).json({ data: post })
});


//per importare il Controller e usarlo nelle rotte
const postsControllers = require('./controllers/router.js');
app.get('/posts', postsControllers.index);

app.listen(3000, () => {
  console.log("Server started on port 3000")
});

