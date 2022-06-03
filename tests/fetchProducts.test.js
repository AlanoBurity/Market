require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
    it('Testa se fetchProducts é uma função', () =>{
    expect(fetchProducts).toBeInstanceOf(Object);
  });
  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada;', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch tiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const api = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(api);
  });
  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    const product = await fetchProducts('computador');
    expect(product).toEqual(computadorSearch);
  });
   it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem:You must provide an url', async () =>{
    try {
      await fetchProducts();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
    });


  
 /*  fail('Teste vazio'); */ 
});
