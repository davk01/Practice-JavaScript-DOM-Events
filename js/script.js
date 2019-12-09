// var x = Math.floor(Math.random()*256);
// var y = Math.floor(Math.random()*256);
// var z = Math.floor(Math.random()*256);
// var colora="rgb("+x+","+y+","+z+")";

// a.style.background=colora;
// var x = Math.floor(Math.random()*256);
// var y = Math.floor(Math.random()*256);
// var z = Math.floor(Math.random()*256);
// var colorb="rgb("+x+","+y+","+z+")";
// b.style.background=colorb;

// var x = Math.floor(Math.random()*256);
// var y = Math.floor(Math.random()*256);
// var z = Math.floor(Math.random()*256);
// var colorc="rgb("+x+","+y+","+z+")";

// c.style.background=colorc;
// var x = Math.floor(Math.random()*256);
// var y = Math.floor(Math.random()*256);
// var z = Math.floor(Math.random()*256);
// var colord="rgb("+x+","+y+","+z+")";
// d.style.background=colord;

// var x = Math.floor(Math.random()*256);
// var y = Math.floor(Math.random()*256);
// var z = Math.floor(Math.random()*256);
// var colora="rgb("+x+","+y+","+z+")";
// var colorb="rgb("+z+","+y+","+x+")";
// var colorc="rgb("+y+","+z+","+x+")";
// var colord="rgb("+x+","+z+","+y+")";
// a.style.background=colora;
// b.style.background=colorb;
// c.style.background=colorc; 
// d.style.background=colord;

// let divById = document.getElementById('onhover')
// let pClassName = document.getElementsByClassName('classP')
// let h1 = document.getElementsByTagName('h1')
// console.log(divById )
// console.log(pClassName)
// console.log(h1)



// let div = document.querySelector('#onhover')
// console.log(div)
// let p = document.querySelectorAll('.classP')
// console.log(p[1])
// let a = document.querySelector('div#onhover a')
// console.log(a)

// let h1 = document.querySelector('h1')
// let input = document.querySelector('input')
// let button = document.querySelector('button')

// h1.addEventListener('mouseenter', function(){
//     this.style.color = 'red'
// })
// h1.addEventListener('mouseleave', function(){
//     this.style.color = 'black'
// })
// function cli(){
//    h1.textContent = input.value
// }
// button.addEventListener('click',cli)

let devs = document.querySelectorAll('div')

for(var i=0; i<devs.length; i++){
    devs[i].addEventListener('click', function(){
        console.log(this.getAttribute('id'))
    },true)
}