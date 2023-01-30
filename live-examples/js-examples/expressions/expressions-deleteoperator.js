const Employee = {
  firstname: 'Андрій',
  lastname: 'Мельник'
};

console.log(Employee.firstname);
// Очікуваний вивід: "Андрій"

delete Employee.firstname;

console.log(Employee.firstname);
// Очікуваний вивід: undefined
