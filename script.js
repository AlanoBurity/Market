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
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
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

window.onload = async () => {
  aplicaLoading();
  await listagemProdutos();
  encerraLoading();
};