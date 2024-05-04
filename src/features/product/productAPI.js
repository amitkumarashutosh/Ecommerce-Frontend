const fetchAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProductsByFilters = async (filter, sort, pagination) => {
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

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  try {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = 99;
    return { data: { products: data, totalItems: totalItems } };
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchBrands = async () => {
  try {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProductsById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchCategories,
  fetchBrands,
  fetchProductsById,
};
