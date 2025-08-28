import { createButtons } from '../components/createButtons';
import { createTable } from '../components/createTable';
import { createSearchInput, searchItems } from '../components/createSearchInput';
import '../styles/dashboard.css';

// SOME DOCS
// check out the docs for the appendChild method -> https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export const renderDashboard = () => {
    const dashboardContainer = document.querySelector(".dashboard-container");

    // create headers
    const headerContainer = document.createElement("header");
    headerContainer.className = "header-container";

    const welcomeTitle = document.createElement("h1");
    welcomeTitle.innerText = "Welcome, "
    welcomeTitle.className = "welcome-title";

    const newSpan = document.createElement("span");
    newSpan.textContent = "Valentina León";
    newSpan.className = "title-span";

    welcomeTitle.append(newSpan);
    headerContainer.appendChild(welcomeTitle);

    // add the search input to the header
    const searchInput = createSearchInput(headerContainer);
    
    // create a new client
    // append header to the main container
    dashboardContainer.appendChild(headerContainer);
    
    // render the table:
    const principalDiv = document.createElement("div");
    principalDiv.className = "principal-div";
    
    // create buttons
    const newClientBtnClass = "new-client-button";
    const buttonTextContent = "+ New"
    createButtons(newClientBtnClass, principalDiv, buttonTextContent);
    
    dashboardContainer.appendChild(principalDiv);
    console.log(principalDiv);
    
    createTable();
    
    searchItems(searchInput);
    // append the dashboard container to our DOM´s body
    document.body.appendChild(dashboardContainer);
}