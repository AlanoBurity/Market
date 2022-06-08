const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};
const listagemProdutos = async () => {
  const capturar = document.querySelector('.items');
  const produtos = await fetchProducts('computador');

 produtos.results.forEach((ell) => {
   const cadaProduto = createProductItemElement(ell);
   capturar.appendChild(cadaProduto);
 });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

function aplicaLoading() {
    const criaSection = document.createElement('section');
    criaSection.textContent = 'Carregando...';
    criaSection.className = 'loading';
    document.querySelector('.items').appendChild(criaSection);
  }
  function encerraLoading() {
    document.querySelector('.loading').remove();
  }
  
  const addToCart = async (itemSku) => {
    const obj = await fetchItem(itemSku);
    const listToCart = document.querySelector('.cart__items');
    listToCart.appendChild(createCartItemElement(obj));
  };
  
  const getButtons = async () => {
    const getBtn = document.querySelectorAll('.item__add');
    getBtn.forEach((item) => item.addEventListener('click', () => {
      const parent = item.parentElement;
      addToCart(getSkuFromProductItem(parent));
    }));
  };
  function limparCompras() {
  const lista = document.querySelector('.cart__items');
  const esvaziarCarrinho = document.querySelector('.empty-cart');
  const limparCarrinho = () => {
    lista.innerHTML = '';
  };
  esvaziarCarrinho.addEventListener('click', limparCarrinho);
}
  
  window.onload = async () => {
    aplicaLoading();
    await listagemProdutos();
    encerraLoading();
    getButtons();
    limparCompras();
};