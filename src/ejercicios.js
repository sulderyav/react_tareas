// Ejercicio 1 Words// 
    // Array.filter 

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    
    const newWords = [];
    for(let word = 0, word < words.lenght ; word ++){
    if(words [word].lenght > 6){
    newWords.push(words[word])
    }
    }

    // Array.prototype.find 
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    
    const foundWord = words.find(word => word.length > 6);
    console.log(foundWord);

    // Array.prototype.findIndex 
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    
    const foundIndex = words.findIndex(word => word.length > 6);
    console.log(foundIndex);

    // Array.prototype.map 
    const newWords = words.map(word => {
        if (word.length > 6) {
          return word;
        }
      });
      console.log(newWords);
    
// Ejercicio 2 Productos 
const productos = [
    { nombre: 'Camisa', precio: 500 },
    { nombre: 'Pantalón', precio: 1200 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Chaqueta', precio: 1500 },
    { nombre: 'Bufanda', precio: 300 },
  ];
    // Array.prototype.filter
    const productosPrecioSuperior = productos.filter(producto => producto.precio > 1000);
    console.log('Productos con precio superior a 1000:');
    console.log(productosPrecioSuperior);

    // Array.protoype.find
    const productoPrecioSuperior = productos.find(producto => producto.precio > 1000);
console.log('Producto con precio superior a 1000:');
console.log(productoPrecioSuperior);

    // Array.prototype.findIndex
    const indiceProductoPrecioInferior = productos.findIndex(producto => producto.precio < 500);
    console.log('Índice del producto con precio inferior a 500:');
    console.log(indiceProductoPrecioInferior);

    // Array.prototype.map
    const nombresProductos = productos.map(producto => producto.nombre);
    console.log('Nombres de los productos:');
    console.log(nombresProductos);

// Ejercicio 3 Alumnos 
    const alumnos = [
    { nombre: 'Juan', edad: 19, promedio: 85 },
    { nombre: 'María', edad: 21, promedio: 92 },
    { nombre: 'Pedro', edad: 18, promedio: 88 },
    { nombre: 'Laura', edad: 25, promedio: 95 },
    { nombre: 'Carlos', edad: 22, promedio: 89 },
  ];
  
    // Array.prototype.filter
    const alumnosEdadSuperior = alumnos.filter(alumno => alumno.edad >= 25);
    console.log('Alumnos con edad mayor o igual a 25:');
    console.log(alumnosEdadSuperior);
    
    // Array.prototype.find
    const alumnoPromedioSuperior = alumnos.find(alumno => alumno.promedio > 90);
    console.log('Alumno con promedio superior a 90:');
    console.log(alumnoPromedioSuperior);

    // Array.prototype.findIndex
    const indiceAlumnoEdadInferior = alumnos.findIndex(alumno => alumno.edad < 20);
    console.log('Índice del alumno con edad inferior a 20:');
    console.log(indiceAlumnoEdadInferior);

    // Array.prototype.map
    const nombresAlumnos = alumnos.map(alumno => alumno.nombre);
    console.log('Nombres de los alumnos:');
    console.log(nombresAlumnos);






