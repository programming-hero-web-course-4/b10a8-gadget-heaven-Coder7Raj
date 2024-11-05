const getAllCart = () => {
  const all = localStorage.getItem("cart");

  if (all) {
    const cart = JSON.parse(all);
    console.log(cart);
    return cart;
  } else {
    console.log([]);
    return [];
  }
};

export default getAllCart;
