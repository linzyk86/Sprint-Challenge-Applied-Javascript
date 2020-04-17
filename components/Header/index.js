// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //<div class="header"></div>
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    //<span class="date">SMARCH 28, 2019</span>
    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';

    //<h1>Lambda Times</h1>
    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    //<span class="temp">98°</span>
    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    headerDiv.appendChild(date);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(temp);

    return headerDiv;
}
let headerDiv = Header();
let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(headerDiv);
