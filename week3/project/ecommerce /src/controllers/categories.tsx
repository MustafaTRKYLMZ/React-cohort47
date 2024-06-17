export const getAllCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return response.json();
  } catch (error) {
    throw new Error("Error while fetching categories");
  }
};

export const getSingleCategory = async (selectedCategory: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/:${selectedCategory}`
    );
    return response.json();
  } catch (error) {
    throw new Error("Error while fetching products");
  }
};
