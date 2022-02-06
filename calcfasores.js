
const toDegrees =(radianos)=>{
    
    return radianos*(180/Math.PI);
}


const fasRettoPolar =(num1,num2)=>{
    
    let number = Math.sqrt((Math.pow(num1,2)+(Math.pow(num2,2))))


    let result = parseFloat(number.toFixed(2)) 
    
    let radianos = Math.atan((num2/num1))
    let graus = parseFloat((toDegrees(radianos).toFixed(2)))
    return (result + '|_' + graus)
    
}
const fasPolarToRet =(num,angulo)=>{

    let Real = num*Math.cos(toDegrees(angulo));
    let Im = num*Math.sin(toDegrees(angulo))
    let result = (parseFloat(Real.toFixed(2))) + ' ' + (parseFloat(Im.toFixed(2))) + 'j'
    return result;
}

//-------------------------------------------------------------------
// TRANFORMAR DA FORMA RETANGULAR => FORMA POLAR
// EX: 3 -2j  => 3.60|__-33.6900... (GRAUS)


const num1 = 3

const num2 = -2
console.log('FORMA RETANGULAR => FORMA POLAR\n')
console.log('forma fasorial retangular: '+ num1 +' '+num2+'j\n' + 'forma fasorial polar: ' + fasRettoPolar(num1,num2));
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// TRANSFORMAR DA FORMA POLAR => FORMA RETANGULAR
// EX: 46.17|__17.65 (GRAUS) => 43.79 -14.62j
const numero = 46.17

const angulo = 17.65
console.log('\n\nFORMA POLAR => FORMA RETANGULAR\n')
console.log('forma fasorial polar:' + numero + '|_' + angulo +'\n'+'forma fasorial retangular:'+ fasPolarToRet(numero,angulo))
