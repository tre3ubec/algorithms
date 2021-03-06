// Быстрая сортировка

function quickSort(array) { // Создаем функцию с аргументом Array (массив)
  if (array.length < 2) { // Если количество элементов массива меньше 2, то:
    return array // возвращаем массив
  } else { // иначе:
    let pivot = array[0] // Выбираем опорный элемент (первый элемент массива)
    let less = array.slice(1).filter(function(el) { // подмассив меньших элементов
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
// Метод filter() создаёт новый массив со всеми элементами, 
// прошедшими проверку, задаваемую в передаваемой функции.
      return el <= pivot;
    })
    let greater = array.slice(1).filter(function(el) { // подмассив больших элементов
    return el > pivot;
  });
  // Метод concat() возвращает новый массив, состоящий из массива, 
  // на котором он был вызван, соединённого с другими массивами 
  // и/или значениями, переданными в качестве аргументов.
  return quickSort(less).concat([pivot], quickSort(greater));
  } 
}
console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]
  
