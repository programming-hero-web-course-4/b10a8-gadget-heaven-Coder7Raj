const getAllWish = () => {
  const all = localStorage.getItem("wish");

  if (all) {
    const wish = JSON.parse(all);
    // console.log(wish);
    return wish;
  } else {
    console.log([]);
    return [];
  }
};

export default getAllWish;
