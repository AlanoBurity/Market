const getSavedCartItems = () => {
  const Saved = localStorage.getItem('cartItems');
  return Saved;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
