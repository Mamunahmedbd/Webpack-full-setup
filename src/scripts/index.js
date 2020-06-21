const {ABC} = require('./test');
// import '../styles/index.scss' 
const fn = () => {
    console.log('I am work on webpack')
}
fn()

console.log(ABC)


console.log("it's tested")

class X {
    a = 10

    ABC(){
        console.log(a)
    }
}
let a = new X()
a.ABC()