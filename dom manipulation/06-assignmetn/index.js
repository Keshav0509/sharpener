/*
1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
2. Make the sub-heading text italic.
3. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
4. On this paragraph tag set an id of "fruits-total".
*/

// ans 1;
const subHeading = document.createElement('h3');
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(subHeadingText);
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
const secondDiv = divs[1];
firstDiv.appendChild(subHeading);
// ans 2;
subHeading.style.fontStyle = 'italic';
// ans 3;
const fruitsList = document.querySelector('.fruits');
const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
secondDiv.insertBefore(para, fruitsList);
// ans 4;
para.id = 'fruits-total';

