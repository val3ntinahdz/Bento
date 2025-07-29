import { CreateButtons } from '../components/CreateButtons';
import '../styles/dashboard.css';

export const renderDashboard = () => {
    const dashboardContainer = document.querySelector(".dashboard-container");

    // create headers
    const welcomeTitle = document.createElement("h1");
    welcomeTitle.innerText = "Bienvenida, "
    welcomeTitle.className = "welcome-title";

    const newSpan = document.createElement("span");
    newSpan.textContent = "Valentina León";
    newSpan.className = "title-span";

    welcomeTitle.appendChild(newSpan);
    dashboardContainer.appendChild(welcomeTitle);

    // create buttons
    // create a new client
    const newClientBtnClass = "new-client-button";
    const buttonTextContent = "+ New"
    CreateButtons(newClientBtnClass, dashboardContainer, buttonTextContent); 

}