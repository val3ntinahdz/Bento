import '../styles/alerts.css';
import '../styles/buttons.css';

// THis
let resolvePromise = null; 

// This function creates the alert HTML and appends an event listener to the 
// confirmation button. 
export const createAlertHTML = () => {
    const alertContainer = document.createElement("div");
    alertContainer.id = "customAlert";
    alertContainer.className = "alert-box";

    alertContainer.innerHTML = `
        <div class="alert-content">
            <h2>Do you want to delete this item?</h2>
            <p>Choose wisely</p>

            <button id="btnConfirm">OK</button>
        </div>
    `;

    const dashboard = document.querySelector(".dashboard-container");
    dashboard.append(alertContainer);

    const confirmBtn = document.getElementById('btnConfirm');
    
    confirmBtn.addEventListener("click", () => {
        alertContainer.style.display = "none";
        resolvePromise(true);
        resolvePromise = null;
    });
}

// This function ensures that the alert exists, if so, we display it, and return a promise, 
// connected the event listener previously created in our createAlertHTML() function
export const ShowAlert = () => {
    const customAlert = document.getElementById('customAlert');

    if (customAlert) {
        customAlert.style.display = "flex";
    
        return new Promise ((resolve) => {
            resolvePromise = resolve;
        });
    }
}
