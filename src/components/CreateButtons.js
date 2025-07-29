// here we create our custom buttons 
export const CreateButtons = (btnClass, htmlElement, buttonContent = "") => {
    const newButton = document.createElement("button");
    newButton.className = btnClass;

    newButton.textContent = buttonContent;
    htmlElement.appendChild(newButton);

    return newButton;
}