const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  if (item === undefined) { return Promise.reject(new Error('You must provide an url')); }
  const resposta = await fetch(url);
  const dados = await resposta.json();
  return dados;
};
fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
