export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir los Elementos que ya tenemos en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    
    //Comprobar si es un array
    if(Array.isArray(elementos)){

        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        // Crear un array con la nueva peli
        elementos =[elemento];
    }
    console.log(elementos);
    //Guardar en el LocalStorage
    localStorage.setItem(clave, JSON.stringify(elementos));
    //Devolver Objeto guardado
    return elemento;
    

}