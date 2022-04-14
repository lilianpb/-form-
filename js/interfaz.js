//funcionalidad para agregar un elementos
var friendsList = [];

//funcionn que recibe todos los datos del formulario que nos va mandar el la  interfaz del usuario  


function addfriend(pgender, pname, phobby) {
    //recibimos todos los datos y construimos un objeto amigos con notacion de json
    var newfriend = {
        genero: pgender,
        nombre: pname,
        hoby: phobby
    };

    //el objeto amigo con sus propiedaades lo agregamos a la lista

    //para asegurarme si se esta creando el objeto

    console.log(newfriend);
    friendsList.push(newfriend);
    console.log(friendsList);
}

function getFriend() {

    return friendsList;
}