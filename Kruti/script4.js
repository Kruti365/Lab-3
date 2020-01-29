
function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

var id=0;

function addEntry() {
    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>John</td>
    </tr>
    `
    id +=1;

    document.getElementById("tbody").innerHTML += snippet;
}

function removeEntry(id) {
    document.getElementById(id).remove();
}
