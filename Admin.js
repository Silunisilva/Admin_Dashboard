document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("visible");
  });
});

//Emplyees page js

document.addEventListener("DOMContentLoaded", () => {
  const employeeForm = document.getElementById("employeeForm");
  const employeeTable = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];

  // Store employee data
  let employees = [];

  // Handle Add Employee form submission
  employeeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;

    // Add new employee to the employees array
    const newEmployee = { name, email, position };
    employees.push(newEmployee);

    // Update the employee table
    updateEmployeeTable();

    // Reset the form
    employeeForm.reset();
  });

  // Function to update the employee table
  function updateEmployeeTable() {
    // Clear existing rows
    employeeTable.innerHTML = "";

    // Loop through employees and add to the table
    employees.forEach((employee, index) => {
      const row = employeeTable.insertRow();
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.position}</td>
        <td>
          <a href="#" onclick="editEmployee(${index})">Edit</a>
          <a href="#" onclick="deleteEmployee(${index})">Delete</a>
        </td>
      `;
    });
  }

  // Function to edit an employee
  window.editEmployee = function (index) {
    const employee = employees[index];
    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("position").value = employee.position;

    // Remove the employee from the array and update the table
    employees.splice(index, 1);
    updateEmployeeTable();
  };

  // Function to delete an employee
  window.deleteEmployee = function (index) {
    // Remove the employee from the array and update the table
    employees.splice(index, 1);
    updateEmployeeTable();
  };
});


