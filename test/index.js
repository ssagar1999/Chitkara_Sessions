var parent = document.getElementById('parent')
var child = document.getElementById('child')
var innerChild = document.getElementById('innerChild')

parent.addEventListener('click'  , function (e){
    console.dir(e.currentTarget)
    console.dir(e.target)
    e.target.style.backgroundColor='grey';

})

// innerChild.addEventListener('click', function(e){
//     e.stopPropagation()
//     alert('innner child')

// })


var input = document.getElementById('inp')
var btn = document.getElementById('btn')
var ul = document.getElementById('ul')

btn.addEventListener('click', addTask)
function addTask(e){
var el = document.createElement('li');
el.innerText = input.value;
console.log(ul)
ul.appendChild(el)
}
