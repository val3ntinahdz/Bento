import { getClients } from "../services/api"

// export const ClientCard = async() => {
//     const clients = await getClients();
//     console.log(clients);

//     clients.forEach(client => {
//         // console.log(client);
        
//         const renderClientHTML = `
//             <div>
//                 <h4>Client name: ${client.name}</h4>
//                 <h4>Client phone: ${client.email}</h4>
//                 <h4>Client email: ${client.phone}</h4>
//                 <h4>Client company: ${client.company}</h4>
//             </div>  
//         `
//         return renderClientHTML;
//     });
// }

let div = "";

export const ClientCard = (clientData) => {

    const dom = document.querySelector(".principal-div");

    div += `
        <div>
            <h4>Client name: ${clientData.name}</h4>
            <h4>Client phone: ${clientData.email}</h4>
            <h4>Client email: ${clientData.phone}</h4>
            <h4>Client company: ${clientData.company}</h4>
        </div>  
    `
    dom.innerHTML = div;
}


