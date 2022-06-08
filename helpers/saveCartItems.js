const saveCartItems = (list) => {
  const salvar = localStorage.setItem('cartItems', list);
  return salvar;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
