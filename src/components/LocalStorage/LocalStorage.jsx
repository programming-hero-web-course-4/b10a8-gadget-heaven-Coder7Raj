const getAllCart = () => {
  const all = localStorage.getItem("cart");

  if (all) {
    const carts = JSON.parse(all);
    // console.log(cart);
    return carts;
  } else {
    console.log([]);
    return [];
  }
};

export default getAllCart; // Named export
