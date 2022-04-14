

//halamos los datos del  formulario y enviarlos a mi paginade interfaz
document.querySelector('#btnSave').addEventListener('click', savefriend);
printFriendsTable();

function savefriend() {
    //tomo los datos del formulario 
    var sgender = document.querySelector('#gender').value;
    var sname = document.querySelector('#name').value;
    var shobby = document.querySelector('#hobby').value;
    //aseguramo que la informacion este 

    addfriend(sgender, sname, shobby);
    printFriendsTable();

}
//para que me devuelva la lista de amigos
function printFriendsTable() {

    var list = getFriend(); // esta nos va devolver la lista de amigos y la guardamos en la variable list
    tbody = document.querySelector('#friendsTable tbody');
    //LIMPIAMOS la los datos para visualizar el siguiente
    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {

        var row = tbody.insertRow(i)
        genderCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            hobbyCell = row.insertCell(2);



        genderCell.innerHTML = list[i].genero;
        nameCell.innerHTML = list[i].nombre;
        hobbyCell.innerHTML = list[i].hoby;

        tbody.appendChild(row);
    }



    
}

