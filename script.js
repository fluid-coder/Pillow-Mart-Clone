// let product=document.querySelector('.product')
// product.addEventListener('mouseover',function(){
//     product.style.backgroundColor ="black"
// })
function myFunction(x){
    if(x.matches){
        document.body.style.backgroundColor = "blue"
    }
    else{
        document.body.backgroundColor = "yellow"
}
}
var x = window.matchMedia("max-media:900px")
myFunction(x)
x.addListener(myFunction)