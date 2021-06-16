//RESETA PARA CONECTARNOS CON UN API (SERVIDOR)

//1.URL DEL SERVICIO

let url="http://localhost/apisura/public/heroes";

//2 armamos la peticion
let peticion={
    method:"GET"
}

//3. LLAMAR AL SERVIDOR
fetch(url,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){
    pintarHeroes(datos)
})


//Funcion para pintar los recursos que trae el API
function pintarHeroes(datos){

    let fila=document.getElementById("fila");

    datos.map(function(heroe){

        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=heroe.foto;

        let tarjetaCuerpo=document.createElement("div");
        tarjetaCuerpo.classList.add("card-body");

        let nombre=document.createElement("h3");
        nombre.classList.add("text-center");
        nombre.textContent=heroe.nombre;

        let descripcion=document.createElement("p");
        descripcion.classList.add("text-center");
        descripcion.textContent=heroe.descripcion;

        //PINTAR (DEFINIR HIJOS)
        tarjetaCuerpo.appendChild(nombre);
        tarjetaCuerpo.appendChild(descripcion);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tarjetaCuerpo);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);
te

    });



}