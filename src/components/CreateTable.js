import { showModal } from "../clients/presentation/RenderModal";
import { getClient, getClients, updateClient } from "../services/api";

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


    } else {
        table = document.querySelector("table");
        const createdClient = clientsData[clientsData.length - 1];

        // About "insertAdjacentHTML" method: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        table.querySelector("tbody").insertAdjacentHTML("beforeend", updateTable(createdClient));
    }

    table.addEventListener("click", selectClientFromTable);

    return table;
}


const updateTable = (client) => {

    const appendTbody = `
        <tr>
            <th>${client.id}</th>
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

    return appendTbody;

}

const selectClientFromTable = (event) => {
    const element = event.target.closest(".btn-edit");
    const userId = element.getAttribute("data-id");

    showModal(userId);
}

const deleteClientFromTable = (event) => {

}
// create bento-style cards!

// export const ClientCard = (clientData) => {
//     const dom = document.querySelector(".principal-div");

//     const tr = document.createElement("tr");

//     const ths = [
//         `<th>Client ID: ${clientData.id}</th>`,
//         `<th>Client name: ${clientData.name}</th>`,
//         `<th>Client phone: ${clientData.phone}</th>`,
//         `<th>Client email: ${clientData.email}</th>`,
//         `<th>Client company: ${clientData.company}</th>` 
//     ]

//     ths.forEach(th => {
//         tr.appendChild(th);
//     })
    
//     div +=
//         thead.appendChild(tr);
//         tbody.appendChild(thead);

//     dom.innerHTML = div;
//     clientsTable.appendChild(tbody); // fix the table logic!
// }




