const calcularPromedio = (numeros) => {
  let suma = 0; // Inicializamos la variable suma en 0

  for (let i = 0; i < numeros.length; i++) suma += numeros[i]; // Sumamos cada elemento del array

  return suma / numeros.length; // Retornamos el promedio
};

console.log(calcularPromedio([1, 2, 3, 4, 5])); // 3
