const categories = {
  electronics: ['laptop', 'phone', 'headphones', 'keyboard', 'mouse', 'watch', 'TV'],
  groceries: ['apple', 'banana', 'bread', 'milk', 'eggs', 'oats', 'chicken', 'beef'],
  furniture: ['sofa', 'table', 'chair', 'wardrobe', 'bed', 'nightstand', 'bookshelf'],
  clothing: ['shirt', 'pants', 'shoes', 'socks', 'sweater', 'underwear', 'coat'],
  hygiene: ['toothpaste', 'toothbrush', 'shampoo', 'showergel', 'soap', 'wet wipes']
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