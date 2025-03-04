const categories = {
  electronics: ['laptop', 'phone', 'headphones', 'keyboard', 'mouse', 'watch', 'TV', 'trimmer'],
  groceries: ['apple', 'banana', 'bread', 'milk', 'eggs', 'oats', 'chicken', 'beef', 'pizza'],
  furniture: ['sofa', 'table', 'chair', 'wardrobe', 'bed', 'nightstand', 'bookshelf', 'carpet'],
  clothing: ['shirt', 'pants', 'shoes', 'socks', 'sweater', 'underwear', 'coat', 'jacket', 'tank top'],
  hygiene: ['toothpaste', 'toothbrush', 'shampoo', 'showergel', 'soap', 'wet wipes', 'gum']
};
document.getElementById('categorize').addEventListener('click', () => {
  const productInput = document.getElementById('product');
  const productName = productInput.value.trim().toLowerCase();

  if (!productName) {
    alert("Please enter a product name!");
    return;
  }

  let categoryFound = "Uncategorized"; // Default category if no match is found

  // Loop through categories to find a match
  for (const category in categories) {
    if (categories[category].includes(productName)) {
      categoryFound = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize category
      break;
    }
  }

  // Display the result
  document.getElementById('productDisplay').textContent = productName;
  document.getElementById('categoryDisplay').textContent = categoryFound;
});
// Function to add a new category and product
document.getElementById('addCategory').addEventListener("click", () => {
  const newCategoryInput = document.getElementById('newCategory');
  const newProductInput = document.getElementById('newProduct');
  const newCategory = newCategoryInput.trim().toLowerCase();
  const newProduct = newProductInput.trim().toLowerCase();
  // Validate inputs
  if (!newCategory || !newProduct) {
    alert("Please enter both category and a product!");
    return;
  }
  if (!categories[newCategory]) {
    categories[newCategory] = [];
  }
  categories[newCategory].push(newProduct);
  newCategory.value = "";
  newProduct.value = "";
  alert(`Category: "${newCategory}" with product "${newProduct}" has been added.`);
});