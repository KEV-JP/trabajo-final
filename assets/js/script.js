// const empleados = [

//   {
//   nombre: "Alex",
//   area: "Desarrollador",
//   salario: "1300000",
//   historial: [
//   { datos: "2023-01-15", cantidad: 1300000},
//   { datos: "2023-02-15", cantidad: 1320000}
//   ]
//  },
//  {
//   nombre: "Andres",
//   area: "ingeniero",
//   salario: "1400000",
//   historial: [
//   { datos: "2023-01-15", cantidad: 1400000},
//   { datos: "2023-02-15", cantidad: 1420000}
//   ]
//  } 
// ];

// function displayEmpleados() {
//   const empleadoLista = document.getElementById("empleado-lista");
//   empleados.forEach(empleado => {
//   const card = document.createElement("div");
//   card.className = "empleado-card";
//   card.innerHTML = <h2>{empleado.nombre}</h2>;
//   <h3>area: {empleado.area}</h3>;
//   <div>
//   <h4>historial de salarios</h4>;
//   <ul>
//   {empleado.historial.map(entry => <li>fecha: {entry.datos}, salario: {entry.area}</li>).join('')}
//   </ul>
//   </div>;
//   empleadoLista.appendChild(card);
//   });
//   }
//   displayEmpleados();
  

    
    function agregarEmpleado() {
  const name = document.getElementById("name").value;
  const department = document.getElementById("department").value;
  const salary = document.getElementById("salary").value;

  
      // Crear una nueva tarjeta de empleado
      const employeeCard = document.createElement("section");
  employeeCard.className = "employee-card";
  employeeCard.innerHTML = `
      nombre: ${name}
      <br>
       area: ${department}
       <br>
       Salario: $${salary}
       <br>
  `;

  // Agregar la tarjeta al contenedor de empleados
  const employeeContainer = document.getElementById("employee-container");
  employeeContainer.appendChild(employeeCard);
  alert("Registrado")
   document.getElementById("name").value = "";
  document.getElementById("department").value = "";
  document.getElementById("salary").value = "";
  index++

  }
 
  

    



 