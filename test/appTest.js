const assert = require('assert');
const app = require('../app');



describe('Probar una funciòn de suma',()=>{
	//Casos de prueba al 50%
	//Uno que funcione y uno que falle
	//Que 5+5 = 10 = exito
	it('cinco mas cinco es diez',()=>{
		assert.equal(10, app(5,5));
	});
	//Que 5+5 != 55 = exito
	it('cinco mas cinco no es igual a cincuenta y cinco',()=>{
		assert.notEqual('55', app(5,5));
	});
});
