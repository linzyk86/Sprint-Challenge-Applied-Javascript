// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then ((response)=>{
        console.log(response.data.articles);
      
         response.data.articles.javascript.forEach((article)=>{
           console.log(article);
            let newCard = cardCreator(article.headline, article.authorName, article.authorPhoto);
            cardsContainer.appendChild(newCard);
        })
        response.data.articles.bootstrap.forEach((article)=>{
            console.log(article);
            let newCard = cardCreator(article.headline, article.authorName, article.authorPhoto);
            cardsContainer.appendChild(newCard);
        })
        response.data.articles.technology.forEach((article)=>{
            console.log(article);
            let newCard = cardCreator(article.headline, article.authorName, article.authorPhoto);
            cardsContainer.appendChild(newCard);
        })
        response.data.articles.jquery.forEach((article)=>{
            console.log(article);
            let newCard = cardCreator(article.headline, article.authorName, article.authorPhoto);
            cardsContainer.appendChild(newCard);
        })
        response.data.articles.node.forEach((article)=>{
            console.log(article);
            let newCard = cardCreator(article.headline, article.authorName, article.authorPhoto);
            cardsContainer.appendChild(newCard);
        })
        
    })
    .catch((err) =>{
        console.log('error', err);
    });
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
function cardCreator(headline, authorName, authorPhoto){
    // <div class="card"       
        let card = document.createElement('div');
        card.classList.add('card'); 
        // <div class="headline">{Headline of article}</div>
        let headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = headline;
        //   <div class="author">
        let author = document.createElement('div');
        author.classList.add('author');
        // <div class="img-container">
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        //<img src={url of authors image} />
        let img = document.createElement('img');
        img.src = `${authorPhoto}`;
        //<span>By {author's name}</span>
        let authorSpan= document.createElement('span');
        authorSpan.textContent = `By ${authorName}`;

        imgContainer.appendChild(img);
        imgContainer.appendChild(authorSpan);
        author.appendChild(imgContainer);
        card.appendChild(headlineDiv);
        card.appendChild(author);

        return card;
     }
    
      let cardsContainer = document.querySelector('.cards-container');

   

