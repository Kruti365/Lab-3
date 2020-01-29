
function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

function addEntry() {
    snippet = `
    <tr>
        <td>❌</td>
        <td>John</td>
    </tr>
    `
    document.getElementById("tbody").innerHTML += snippet;
}
