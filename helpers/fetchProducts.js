const fetchProducts = async (id) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
  if (id === undefined) { return Promise.reject(new Error('You must provide an url')); }
  const resposta = await fetch(url);
  const dados = await resposta.json();
  return dados;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');