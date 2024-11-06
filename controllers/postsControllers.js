// b. All'interno creare le seguenti rotte:
// / - index: ritornerà un html con una ul che stamperà la lista dei post
// /:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post

// c. Scrivere tutte le funzioni delle rotte nel controller dedicato

// d. Registrare il router dentro app.js con il prefisso posts/.


//dovrò scrivere le funzioni di queste rotte:

//router.get('/', postsController.index); //rotta per avere tutti mostrare tutti i post

//router.get('/:slug', postsController.show); //rotta per visualizzare post specific

const db = require('../db/arrayPosts.js');


const index = (req, res) => {
  let markup = '<ul>';

  db.forEach(post => {
    const { title, slug, content, image, tags } = post;

    markup += `
      <li>
        <h2>${title}</h2>
        <h3>Slug: ${slug}</h3>
        <p>${content}</p>
        <img src="/img/${image}" alt="${title}" /><br>
        <span>Tags: ${tags.join(', ')}</span>
      </li>
    `;
  });

  markup += '</ul>';
  res.send(`
    <html>
      <head><title>Lista dei Post</title></head>
      <body>
        <h1>Lista dei Post</h1>
        ${markup}
      </body>
    </html>
  `);
};


const show = (req, res) => {
  const post = db.find(post => post.slug === req.params.slug);
  if (!post) {
    return res.status(404).json({
      error: "404! Not found"
    });
  }
  return res.json({
    data: post
  });
};

module.exports = {
  index,
  show
};
