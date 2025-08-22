import { getClient } from '../services/api';
import '../styles/panel.css';

export const createClientDetailPanel = () => {
    const dashboard = document.querySelector(".dashboard-container");

    const panelContainer = document.createElement("div");
    panelContainer.className = "client-detail-panel hidden";

    const closePanelBtn = document.createElement("button");
    closePanelBtn.className = "close-btn";
    closePanelBtn.textContent = "x";

    const clientDetailContainer = document.createElement("div");
    clientDetailContainer.className = "client-detail-container";

    closePanelBtn.addEventListener("click", () => {
        panelContainer.classList.add("hidden")
    })

    panelContainer.append(closePanelBtn, clientDetailContainer);
    dashboard.appendChild(panelContainer);
}

export const showDetailPanel = (clientId) => {
    loadClientDetails(clientId);
    // panel container
    const panel = document.querySelector(".client-detail-panel");
    console.log("panel container:", panel);

    panel.classList.remove("hidden");
}

const loadClientDetails = async(id) => {
    const detailContainer = document.querySelector(".client-detail-container");
    detailContainer.innerHTML = "";

    const client = await getClient(id);
    console.log("client details:", client);

    // create div for client info
    const clientInfo = `
        <h1>${ client.name }</h1>
        <h2>${ client.company }</h2>

        <hr>

        <h2>Contact Information</h2>
        <h4>Email: ${ client.email }</h4>
        <h4>Phone: ${ client.phone }</h4>
    
    `;

    detailContainer.innerHTML = clientInfo;
    console.log(clientInfo); // print HTML structure
}
