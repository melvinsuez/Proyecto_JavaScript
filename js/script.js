/* validar campos */

function validar() {
    let nom = document.querySelector("#nombre").value
if (nom.length < 5) {
        alert ('Debe ingresar el nombre y apellido');
    }
        else {
            alert ('Datos ingresados correctamente');
        }

        let mail = document.querySelector("#email").value
        validarEmail(mail)
} 

function validarNum(key){

    var code = (key.which) ? key.which : key.keyCode;
    
    if(code==8) { 
        return true;
    } else if(code>=48 && code<=57) { 
        return true;
    } else{
        alert ('Solo debe ingresar numeros');
        return false;
    }
}


/* api GitHub */


function crearElemento(element) {
    return document.createElement(element);
}

function agregar(parent, el) {
return parent.appendChild(el);
}

const repositorio = document.getElementById('lista');
const url = 'https://api.github.com/users/melvinsuez/repos';

fetch(url)
.then((resp) => resp.json())
.then(function(datos) {
let repos = datos;
return repos.map(function(repo) {

    let divRepo = crearElemento('div');
    let divImg = crearElemento('divi');
    let divBody = crearElemento('div');
    
    let imagen = crearElemento('img');
    let titulo = crearElemento('h5');    
    let descripcion = crearElemento('p');
    let link = crearElemento('a');


    imagen.src = repo.owner.avatar_url;
    titulo.innerHTML = repo.name;
    descripcion.innerHTML = repo.description;
    link.innerHTML = "Ir a Repositorio";
    link.href = repo.html_url;


    divRepo.classList.add('col-md-6','col-lg-4');
    divImg.classList.add('card','mx-auto','my-4','border-white','mx-auto');
    divBody.classList.add('card-body');

    imagen.classList.add('card-img-top','sizeImagen');
    titulo.classList.add('card-title');
    descripcion.classList.add('card-text');
    link.classList.add('btn','btn-primary','fs-9','p-2');


    agregar(divRepo, divImg);
    agregar(divRepo, divBody);

    agregar(divImg, imagen);
    agregar(divBody, titulo);    
    agregar(divBody, descripcion);
    agregar(divBody, link);

    agregar(repositorio, divRepo);

})
})
.catch(function(error) {
console.log(error);
});