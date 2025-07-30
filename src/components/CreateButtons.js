// here we create our custom buttons 
import '../styles/buttons.css';

export const CreateButtons = (btnClass, htmlElement, buttonContent = "") => {
    const newButton = document.createElement("button");
    newButton.className = btnClass;

    newButton.textContent = buttonContent;
    htmlElement.appendChild(newButton);

    return newButton;
}