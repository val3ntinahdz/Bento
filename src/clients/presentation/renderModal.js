// import { CreateForm } from "../../components/CreateForm";

import { CreateButtons } from "../../components/CreateButtons";

let modal;

export const RenderModal = () => 
{
    // add event to handle modal pops (show & hide) in buttons (+)
    modal = document.querySelector("#create-new-client-form")

    const dashboard = document.querySelector(".dashboard-container");
    console.log(dashboard);
    const addClientBtn = dashboard.querySelector(".new-client-button");
    console.log(addClientBtn)

    addClientBtn.addEventListener("click", () => {
        showModal();
    })

    // modal.addEventListener("click", (event) => {
    //     if (event.target !== modal) {
    //         hideModal();
    //     }
    // })




    // create form

    // set form values to match current model data
    // set events to modal to handle behavior (ex: when user clicks outside the modal)
    // set events to form in order to create new data (FormData())
        // when user clicks submit, call method "addClient()" from backend to append new data

    // update the DOM view to see the new client reflected in the table (call CreateTable() component)
}

const showModal = () => {
    modal?.classList.remove(".hide-modal");
}

const hideModal = () => {
    modal?.classList.add(".hide-modal");
     // reset the form info
}

const setFormValues = () => {

}
