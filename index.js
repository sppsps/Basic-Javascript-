// 1. How to print in js
// console.log("Hello World!")
// alert("Me")
// document.write("whatever")
// 2. Js console
// console.log("HEYA")
// console.warn("Warning")
// console.error("error reported!!")

// 3. Variables
var n1 = 1;
var n2 = 2;
// console.log(n1+n2)
//Object
var marks = {
    Pranjal:35,
    Aaryan: 26, 
}
var und;
// console.log(und);
//Primitive : undefined,null,numbers,string,symbol
// Reference : arrays, objects
// var arr = [1,2,'what!',4,5]
// var a = 1;
// var b = 2;
// console.log('a+b',a+b)
// arr.forEach(function(element) {
//     console.log(element)   
// })
// let mydata = new Date()
// console.log(mydata.getTime())
// console.log(mydata.getFullYear())
// console.log(mydata.getDay())
let elem = document.getElementsByClassName('container')
//console.log(elem);
//elem[0].style.border = '2px solid red'
// elem[0].classList.add('bg-primary')
// tn = document.getElementsByTagName('div')
// console.log(tn)
// newelement = document.createElement('p')
// newelement.innerText = 'WHAT UP!';
// newelement.style.color='yellow'
// newelement2 = document.createElement('b')
// newelement2.innerText = 'Bold mf';
// newelement2.style.color= 'yellow'
// tn[0].appendChild(newelement);
// tn[0].replaceChild(newelement2,newelement);
// window.onload = function(){
//     console.log('Loaded');
// }
// click.addEventListener('click', function () {
//     console.log('Clicked')
// })
// click.addEventListener('mouseover', function () {
//     console.log('Evevn : Mouse over!');
// })
// click.addEventListener('mouseout', function () {
//     console.log('Evevn : Mouse out bois!');
// })
// let str = document.querySelector('h1').innerText; 
// click.addEventListener('mouseup', function () {
//     console.log('Evevn: Mouse-Up');
//     document.querySelector('h1').innerText = str
// })
// click.addEventListener('mousedown', function () {
//     console.log('Evevn: Mouse-down');
//     document.querySelector('h1').innerText = 'Clickety-click'
// })
//Arrow fns
// sum = (a,b)=>{
//     return a+b;
// }
log = ()=>{
    console.log('Im here and alive.')
}
//setTimeout(log,2000)
//setInterval dont stop.
//clr = setInterval(log,2000)

setInterval(() => {
    let time = new Date();
    document.getElementById('time').innerHTML = time.getHours()+ ':'+ time.getMinutes()+ ':'+ time.getSeconds();
}, 1000);
