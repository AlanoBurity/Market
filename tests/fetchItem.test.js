require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () =>{
    expect(fetchItem).toBeInstanceOf(Object);
  });
  it('Execute a função fetchItem com o argumento MLB1615760527 e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('teste se, ao chamar a função fetchProducts com o argumento MLB1615760527 a função fetch tiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const api = 'https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(api);
  });
  it('Teste se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    const product = await fetchItem('MLB1615760527');
    expect(product).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem:You must provide an url', async () =>{
    try {
      await fetchItem();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
    });
});
