import { getClients } from "../services/api";

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
        </tr>
    `;

    const tbody = document.createElement("tbody");
    clientsTable.append(tableHeaders, tbody);
    return clientsTable;

}


export const CreateTable = async(element) => {
    // this is the actual element -> const dom = document.querySelector(".principal-div");

    const clientsData = await getClients();

    table = createTableStructure();
    element.append(table); // apend the table to the main container

    let tableHTML = "";

    clientsData.forEach(client => {

        tableHTML += `
            <tr>
                <th>${client.id}</th>
                <th>${client.name}</th>
                <th>${client.phone}</th>
                <th>${client.email}</th>
                <th>${client.company}</th>
            </tr>

        `;
        
    })
    
    table.querySelector("tbody").innerHTML = tableHTML;
}


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




