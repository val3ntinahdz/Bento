import { CreateButtons } from '../components/CreateButtons';
import { CreateTable } from '../components/CreateTable';
import { SearchInput } from '../components/SearchInput';
import '../styles/dashboard.css';

// SOME DOCS
// check out the docs for the appendChild method -> https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export const renderDashboard = () => {
    const dashboardContainer = document.querySelector(".dashboard-container");

    // create headers
    const header = document.createElement("header");

    const welcomeTitle = document.createElement("h1");
    welcomeTitle.innerText = "Welcome, "
    welcomeTitle.className = "welcome-title";

    const newSpan = document.createElement("span");
    newSpan.textContent = "Valentina León";
    newSpan.className = "title-span";

    welcomeTitle.append(newSpan);
    header.appendChild(welcomeTitle);

    // add the search input to the header
    SearchInput(header);
    
    // create buttons
    // create a new client
    const newClientBtnClass = "new-client-button";
    const buttonTextContent = "+ New"
    CreateButtons(newClientBtnClass, header, buttonTextContent);
    // append header to the main container
    dashboardContainer.appendChild(header);

    
    // and finally, render the table:
    const principalDiv = document.createElement("div");
    principalDiv.className = "principal-div";
    dashboardContainer.appendChild(principalDiv);
    console.log(principalDiv);

    const element = document.querySelector(".principal-div");
    CreateTable(element);
    
    // append the dashboard container to our DOM´s body
    document.body.appendChild(dashboardContainer);
}