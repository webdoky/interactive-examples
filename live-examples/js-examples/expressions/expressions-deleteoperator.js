const Employee = {
  firstname: 'Андрій',
  lastname: 'Мельник'
};

console.log(Employee.firstname);
// очікуваний вивід: "Андрій"

delete Employee.firstname;

console.log(Employee.firstname);
// очікуваний вивід: undefined
