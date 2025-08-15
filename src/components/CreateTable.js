import { showModal } from "../clients/presentation/RenderModal";
import { deleteClient, getClients } from "../services/api";

let table;

const createTableStructure = () => {

    const clientsTable = document.createElement("table");
    const tableHeaders = document.createElement("thead");

    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Client name</th>
            <th>Client phone</th>
            <th>Client email</th>
            <th>Client company</th>
            <th>Contact Date</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    `;

    const tbody = document.createElement("tbody");
    clientsTable.append(tableHeaders, tbody);
    return clientsTable;

}


export const CreateTable = async() => {
    // check if table already exists. If it does, then only update the tbody structure of the table 
    const clientsData = await getClients();

    if (!table) {
        
        table = createTableStructure();
    
        const element = document.querySelector(".principal-div");
        element.append(table); // apend the table to the main container
    
        let tableHTML = "";
    
        
        clientsData.forEach(client => {
    
            tableHTML += `
                <tr>
                    <th data-id=${client.id}>${client.id}</th>
                    <th>${client.name}</th>
                    <th>${client.phone}</th>
                    <th>${client.email}</th>
                    <th>${client.company}</th>
                    <th>${client.contactDate}</th>
                    <th>
                        <a href="#/" class="btn-edit" data-id="${client.id}">Edit</a>
                    </th>
                    <th>
                        <a href="#/" class="btn-delete" data-id="${client.id}">Delete</a>
                    </th>
                </tr>
    
            `;
            
        })

        table.querySelector("tbody").innerHTML = tableHTML;


    }

    table.addEventListener("click", selectClientFromTable);
    table.addEventListener("click", deleteClientFromTable);

    return table;
}


export const updateTable = (client) => {
    const rowHTML = `
        <tr>
            <th data-id=${client.id}>${client.id}</th>
            <th>${client.name}</th>
            <th>${client.phone}</th>
            <th>${client.email}</th>
            <th>${client.company}</th>
            <th>${client.contactDate}</th>

            <th>
                <a href="#/" class="btn-edit" data-id="${client.id}">Edit</a>
            </th>
            <th>
                <a href="#/" class="btn-delete" data-id="${client.id}">Delete</a>
            </th>
        </tr>
    `;

    const existingRow = table.querySelector(`tr th[data-id="${client.id}"]`)?.closest('tr');
    console.log("existing ROW", existingRow);

    if (existingRow) {
        // create a new template to append the modified object
        const template = document.createElement('template');
        template.innerHTML = rowHTML.trim(); // make sure there are no blank spaces

        // look for our template content's first element child (should be TR: the whole row)
        const newRow = template.content.firstElementChild;
        console.log("the new row with updated data", newRow);

        // replace the existing row content with the new one
        // about replaceWith() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith
        existingRow.replaceWith(newRow);

    } else {
        table.querySelector("tbody").insertAdjacentHTML("beforeend", rowHTML);
    }
}


const selectClientFromTable = (event) => {
    const element = event.target.closest(".btn-edit");
    const userId = element.getAttribute("data-id");

    showModal(userId);
}

const deleteClientFromTable = async(event) => {
    const element = event.target.closest(".btn-delete");

    console.log("element to delete", element);
    const dataId = element.getAttribute("data-id");

    console.log("PARENT ELEMENT", element.parentElement.parentElement);

    try {
        if (dataId) {
            const deletedClient = await deleteClient(dataId);
            console.log(deletedClient);
    
            table.deleteRow(dataId);
        }
    } catch (error) {
        console.log(`Could not delete data from the table - ${error}`);
    }
}