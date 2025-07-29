let div = "";

export const ClientCard = (clientData) => {
    const dom = document.querySelector(".principal-div");

    div += `
        <div>
            <h4>Client ID: ${clientData.id}</h4>
            <h4>Client name: ${clientData.name}</h4>
            <h4>Client phone: ${clientData.email}</h4>
            <h4>Client email: ${clientData.phone}</h4>
            <h4>Client company: ${clientData.company}</h4>
        </div>  
    `
    dom.innerHTML = div;
}


