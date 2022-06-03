const fetchProducts = (id) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;

  fetch(url)
    .then((resposta) => resposta.json())
    .then((data) => console.log(data));
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');