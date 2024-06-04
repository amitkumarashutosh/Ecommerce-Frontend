export const createOrder = async (item) => {
  try {
    const response = await fetch("http://localhost:8080/orders", {
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
