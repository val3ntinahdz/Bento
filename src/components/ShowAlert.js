import '../styles/alerts.css';
import '../styles/buttons.css';

export const ShowAlert = () => {
    createAlertHTML();

    const customAlert = document.getElementById('customAlert');
    const confirmBtn = document.getElementById('btnConfirm');

    const promise = new Promise ((resolve) => {
        confirmBtn.addEventListener("click", () => {
           customAlert.style.display = "none";
           resolve(true);
        });
    });

    return promise;
}

const createAlertHTML = () => {
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
}