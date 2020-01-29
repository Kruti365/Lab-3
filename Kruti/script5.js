
function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

var id=0;
var entries=[
    {id: "1", name: "ABC"},
    {id:"2", name:"XYZ"},
    {id:"3", name:"PQR"}
];
function addEntry() {
    snippet = `
    <tr id="${id}">
        <td onClick="removeEntry(${id})"}>❌</td>
        <td>${getName()}</td>
    </tr>
    `
    id +=1;
    setName("");
    
    document.getElementById("tbody").innerHTML += snippet;
}



/**
 * Get an array of entries, and add that entries to the table, use refresh button 
 */

function refreshTable() {
    
    var i,code="";
    entries.forEach(element =>{
        // var row="<tr>"+"<td>"+"❌"+ "</td>"+
        //                 "<td>"+ entries[i]+ "</td>"+"</tr>";
        // code += row + "\n";
        
        code+=`<tr id="${element.id}">
                <td onClick="removeEntry(${element.id})">❌</td>
                        <td>${element.name}</td></tr>`;
        }); 
        setName("");
        
    document.getElementById("tbody").innerHTML =code;

}
function removeEntry(id) {
    document.getElementById(id).remove();
}


function getName() {
    //var entries=["ABC","XYZ","PQR"];
    
    return document.getElementById("name").value;
}

function setName(name) {
    return document.getElementById("name").value=name;
}
