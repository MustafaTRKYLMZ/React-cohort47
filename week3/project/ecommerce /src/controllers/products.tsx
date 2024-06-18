export const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  } catch (error) {
    throw new Error("Error while fetching products");
  }
};

export const getProductById = async (productId: string) => {
  if (!productId) throw new Error("Product id is required");

  // Convert to number if productId is a string
  const id = typeof productId === "string" ? parseInt(productId) : productId;

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  } catch (error) {
    throw new Error("Error while fetching product");
  }
};
