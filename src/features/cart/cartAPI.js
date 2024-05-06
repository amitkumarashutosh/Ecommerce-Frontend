export const addToCart = async (item) => {
  try {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchItemsByUserId = async (userId) => {
  try {
    const response = await fetch("http://localhost:8080/cart/user=" + userId);
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateCart = async (item) => {
  try {
    const response = await fetch("http://localhost:8080/cart/" + item.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteCartItems = async (itemId) => {
  try {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
    });
    const data = await response.json();
    return { data: { id: itemId } };
  } catch (error) {
    throw new Error(error.message);
  }
};
