export const createUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const checkUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${userData.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};
