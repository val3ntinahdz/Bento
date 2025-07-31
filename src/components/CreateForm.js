import '../styles/forms.css';
import { CreateButtons } from './CreateButtons';
import { CreateTable } from './CreateTable';

export const CreateForm = () => {
    const form = document.createElement("form");
    form.id = "create-new-client-form";

    console.log("form", form);

    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    form.appendChild(formGroup)

    // first label
    const firstLabel = document.createElement("label");
    firstLabel.textContent = "Client name";

    formGroup.appendChild(firstLabel);

    const myInput = document.createElement('input');
    myInput.type = "text";
    firstLabel.appendChild(myInput);

    // second label
    const secondLabel = document.createElement("label");
    secondLabel.textContent = "Client email";

    formGroup.appendChild(secondLabel);

    const secondInput = document.createElement('input');
    secondInput.type = "text";
    secondLabel.appendChild(secondInput);


    // third label 
    const thirdLabel = document.createElement("label");
    thirdLabel.textContent = "Client phone";

    formGroup.appendChild(thirdLabel);

    const thirdInput = document.createElement('input');
    thirdInput.type = "text";
    thirdLabel.appendChild(thirdInput);

    // create a button
    const btnClass = "form-button";
    const btnContent = "Add new client";
    CreateButtons(btnClass, form, btnContent);

    document.body.append(form);
    return form;
}