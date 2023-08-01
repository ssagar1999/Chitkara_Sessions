
function x(cb){
cb()
}

function y(){
    console.log(1)
}
function z(){
    console.log(2)
}
function omega(){
    console.log(3)
}
x(y)
x(z)
x(omega)




