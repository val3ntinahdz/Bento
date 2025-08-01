import '../styles/forms.css';
import { CreateButtons } from './CreateButtons';

export const CreateForm = () => {
    let form = document.createElement("form");
    form.id = "create-new-client-form";
    form.classList.add("hidden");

    const formH1 = document.createElement("h1");
    formH1.innerText = "Create new client";
    form.appendChild(formH1);

    const formGroup = document.createElement("div");
    formGroup.className = "form-group";
    form.appendChild(formGroup)

    // create inputs!
    formGroup.appendChild(createFormFields({
        label: "Client name",
        type: "text",
        id: "name",
        name: "name",
    }))

    formGroup.appendChild(createFormFields({
        label: "Client email",
        type: "text",
        id: "email",
        name: "email",
    }))

    formGroup.appendChild(createFormFields({
        label: "Client phone",
        type: "text",
        id: "phone",
        name: "phone",
    }))

    
    // create a button
    const btnClass = "form-button";
    const btnContent = "Add new client";
    CreateButtons(btnClass, formGroup, btnContent);
    
    document.body.append(form);

    // validate form inputs after form is created and appended to the DOM
    setupFormValidation();
    return form;
}


const createFormFields = ({ label, type, id, name }) => {
    const inputControl = document.createElement("div");
    inputControl.className = "input-control";

    const newLabel = document.createElement("label");
    newLabel.textContent = label;

    const newInput = document.createElement("input");
    newInput.type = type;
    newInput.id = id;
    newInput.name = name;
    newInput.className = "form-input";

    // create validation class
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    // append label and inputs to our div
    inputControl.append(newLabel, newInput, errorDiv);
    return inputControl;
}

const setupFormValidation = () => {
    const form = document.getElementById("create-new-client-form");
    console.log(form);

    const forminputs = document.querySelectorAll(".form-input");
    console.log(forminputs);

    form.addEventListener("submit", e => {
        e.preventDefault();

        forminputs.forEach(input => {
            const inputValue = input.value.trim();
            console.log(inputValue);

            if(inputValue === '') {
                setError(`${ input.id } is required`);
            } else {
                setSuccess();
            }

        })
    })

};


const setError = (message) => {
    const inputControl = document.querySelector(".input-control"); 
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = () => {
    const inputControl = document.querySelector(".input-control"); 
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

// TASKS PARA MAÑANA
// Generar id´s dinamicos
// Crear nuevos datos a partir del modelo de clientes
// Conectar form con los datos reales
// empezar a agregar funcionalidad JS más fuerte (en form, manejo de data, CRUD)