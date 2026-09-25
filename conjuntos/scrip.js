document.addEventListener('DOMContentLoaded', () =>{

    const array1 = [12,12,12,14];
    const array2 = [11,11,13,15];
    const array3 = ["i","]","kK","I"];
    const array4 = array1.concat(array2).concat(array3);
  

    for (const element of array4) {
        console.log(element);
    }
    const conjunto = new Set();

    for (const element of array4) {
        for (const elemento of element) {
            
            conjunto.add(elemento);
        }
    }
    
    for (const element of conjunto) {
        console.log(element);
    }
});