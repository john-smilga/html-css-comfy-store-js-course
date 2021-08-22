const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');
const productCartBtnList = [...document.querySelectorAll('.product-cart-btn')];

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
productCartBtnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    cartOverlay.classList.add('show');
  });
});

const singleProductAddToCartBtn = getElement('.addToCartBtn');

singleProductAddToCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
