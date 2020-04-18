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
     response.data.articles.forEach((article)=>{
         console.log(article);
        //let newCard = cardCreator(article);
        //cardsContainer.appendChild(newCard);
     })

    })
    .catch((err) =>{
        console.log('error', err);
    })

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
function cardCreator(data){
    // <div class="card">
           
        let card = document.createElement('div');
        card.classList.add('card');
         
        // <div class="headline">{Headline of article}</div>
        let headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headline.textContent = `${data.headline}`;
        //   <div class="author">
        let author = document.createElement('div');
        author.classList.add('author');
        // <div class="img-container">
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        //<img src={url of authors image} />
        let img = document.createElement('img');
        img.src = data.authorPhoto;
        //<span>By {author's name}</span>
        let authorSpan= document.createElement('span');
        authorSpan.textContent = `By ${data.authorName}`;

        imgContainer.appendChild(authorPhoto);
        imgContainer.appendChild(authorSpan);
        author.appendChild(imgContainer);
        card.appendChild(headlineDiv);
        card.appendChild(author);

        return card;
     }
   
    let cardsContainer = document.querySelector('.cards-container');

