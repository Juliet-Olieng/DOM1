// Change document background color to silver
// document.getElementById('container').style.backgroundColor='silver'
document.getElementById('container').style.background = 'silver'

// Change the font color for h1 title tag to green
document.getElementById('title').style.color='green'
// Change the font case for h3 title tags to uppercase
// document.getElementById('h3').style.textTransform='uppercase'
document.getElementById('h3').style.textTransform='uppercase'
document.getElementById('h').style.textTransform='uppercase'

// Add one more fruit to the fruits list
let li=document.createElement('li')
li.innerHTML='orange'
document.getElementById('fruList').appendChild(li)
// Add one more vegetable to the vegetables list
let addveg=document.createElement('li')
li.innerHTML='cabbage'
document.getElementById('vegList').appendChild(li)
