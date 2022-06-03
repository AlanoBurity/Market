require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
    it('Testa se fetchProducts é uma função', () =>{
    expect(fetchProducts).toBeInstanceOf(Object);
  });
 /*  fail('Teste vazio'); */
});
