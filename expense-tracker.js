// Get elements
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const addButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// Filter buttons
const filterFood = document.getElementById("filter-food");
const filterTransport = document.getElementById("filter-transport");
const filterShopping = document.getElementById("filter-shopping");
const filterReset = document.getElementById("filter-reset");

// Store expenses
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to update UI
const updateUI = (filteredExpenses = expenses) => {
  expenseList.innerHTML = "";
  let total = 0;

  filteredExpenses.forEach((expense, index) => {
    total += expense.amount;

    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${expense.name}</strong> - $${expense.amount} 
      (${expense.category})<br>
      <small>${expense.date}</small>
      <button onclick="editExpense(${index})">✏️</button>
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    expenseList.appendChild(li);
  });

  totalAmount.textContent = total;
  saveToLocalStorage();
};

// Add Expense
addButton.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let amount = parseFloat(amountInput.value);
  let category = categoryInput.value;
  let date = new Date().toLocaleString();

  if (name === "" || isNaN(amount) || amount <= 0) return;

  let expense = { name, amount, category, date };
  expenses.push(expense);
  updateUI();

  nameInput.value = "";
  amountInput.value = "";
});

// Delete Expense
const deleteExpense = (index) => {
  expenses.splice(index, 1);
  updateUI();
};

// Edit Expense
const editExpense = (index) => {
  let expense = expenses[index];

  nameInput.value = expense.name;
  amountInput.value = expense.amount;
  categoryInput.value = expense.category;

  addButton.textContent = "Update Expense";

  addButton.onclick = () => {
    expenses[index] = {
      name: nameInput.value,
      amount: parseFloat(amountInput.value),
      category: categoryInput.value,
      date: new Date().toLocaleString(),
    };

    updateUI();
    addButton.textContent = "Add Expense";
    addButton.onclick = addExpense;
  };
};

// Save to localStorage
const saveToLocalStorage = () => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

// Load from localStorage
window.onload = () => updateUI();

// Filter functions
const filterExpenses = (category) => {
  let filtered = expenses.filter((expense) => expense.category === category);
  updateUI(filtered);
};

filterFood.addEventListener("click", () => filterExpenses("Food"));
filterTransport.addEventListener("click", () => filterExpenses("Transport"));
filterShopping.addEventListener("click", () => filterExpenses("Shopping"));
filterReset.addEventListener("click", () => updateUI());
