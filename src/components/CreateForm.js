import '../styles/forms.css';
import { CreateButtons } from './CreateButtons';

export const CreateForm = () => {
    const form = document.createElement("form");
    form.id = "create-new-client-form";
    form.classList.add("hidden");

    const formH1 = document.createElement("h1");
    formH1.innerText = "Create new client";

    form.appendChild(formH1);

    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    form.appendChild(formGroup)

    // first label
    const firstLabel = document.createElement("label");
    firstLabel.textContent = "Client name";

    formGroup.appendChild(firstLabel);

    const myInput = document.createElement('input');
    myInput.type = "text";
    myInput.classList.add("input-control");
    formGroup.appendChild(myInput);

    // second label
    const secondLabel = document.createElement("label");
    secondLabel.textContent = "Client email";

    formGroup.appendChild(secondLabel);

    const secondInput = document.createElement('input');
    secondInput.type = "text";
    secondInput.classList.add("input-control");
    formGroup.appendChild(secondInput);


    // third label 
    const thirdLabel = document.createElement("label");
    thirdLabel.textContent = "Client phone";

    formGroup.appendChild(thirdLabel);

    const thirdInput = document.createElement('input');
    thirdInput.type = "text";
    thirdInput.classList.add("input-control");
    formGroup.appendChild(thirdInput);

    // create a button
    const btnClass = "form-button";
    const btnContent = "Add new client";
    CreateButtons(btnClass, formGroup, btnContent);



    document.body.append(form);
    return form;
}


// TASKS PARA MAÑANA
// Generar id´s dinamicos
// Crear nuevos datos a partir del modelo de clientes
// Conectar form con los datos reales
// empezar a agregar funcionalidad JS más fuerte (en form, manejo de data, CRUD)