const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  if (item === undefined) { return Promise.reject(new Error('You must provide an url')); }
  const resposta = await fetch(url);
  const { id, title, price } = await resposta.json();
  return { id, title, price };
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}