//your code here

// script.js
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Pink Floyd'];

function stripArticle(name) {
    // Function to remove leading articles (a, an, the)
    return name.replace(/^(a |an |the )/i, '');
}

bandNames.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

const ulElement = document.getElementById('band');

for (let i = 0; i < bandNames.length; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = bandNames[i];
    ulElement.appendChild(liElement);
}
