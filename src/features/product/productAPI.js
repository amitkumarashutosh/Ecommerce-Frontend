const fetchAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProductsByFilters = async (filter, sort) => {
  let queryString = "";
  for (let key in filter) {
    const categoryValue = filter[key];
    if (categoryValue.length > 0) {
      const lastCategoryValue = categoryValue[categoryValue.length - 1];
      queryString += `${key}=${filter[key]}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  try {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchAllProducts, fetchProductsByFilters };
