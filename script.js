const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
function salvarItem() {
 const capturarItem = document.querySelector('cart_items').innerHTML;
    getSavedCartItems(capturarItem);
}
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};
// Cria lista de produtos, requisito 2
const listagemProdutos = async () => {
  const capturar = document.querySelector('.items');
  const { results } = await fetchProducts('computador');

results.forEach((ell) => capturar.appendChild(createProductItemElement(ell)));
};
// ==========================================================================================================================================================
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// Requisito 11: Adicione um texto de carregando durante uma requisição à API
function aplicaLoading() {
    const criaSection = document.createElement('section');
    criaSection.textContent = 'Carregando...';
    criaSection.className = 'loading';
    document.querySelector('.items').appendChild(criaSection);
  }
  function encerraLoading() {
    document.querySelector('.loading').remove();
  }
// ===============================================================================
const addToCart = async (itemSku) => {
  const itemSpecs = await fetchItem(itemSku);
  const listToCart = document.querySelector('.cart__items');
  listToCart.appendChild(createCartItemElement(itemSpecs));
};

const getButtons = async () => {
  const getBtn = document.querySelectorAll('.item__add');
  getBtn.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentElement;
    addToCart(getSkuFromProductItem(parent));
    salvarItem();
  }));
};
// Requisito 10: Limpar o Carrinho de compras
  function limparCompras() {
    const lista = document.querySelector('.cart__items');
    const esvaziarCarrinho = document.querySelector('.empty-cart');
    const limparCarrinho = () => {
      lista.innerHTML = '';
  };
  esvaziarCarrinho.addEventListener('click', limparCarrinho);
}

// ================================================================================================================== 
  window.onload = async () => {
    await listagemProdutos();
    await getButtons();
    aplicaLoading();
    encerraLoading();
    limparCompras();
};