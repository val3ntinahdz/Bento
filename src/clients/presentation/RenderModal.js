import { CreateTable } from "../../components/CreateTable";
import { addClient, getClient, updateClient } from "../../services/api";

let modal, form;
let loadedClient = {};

export const RenderModal = () => 
{
    // add event to handle modal pops (show & hide) in buttons (+)
    modal = document.querySelector(".modal-container")
    form = modal.querySelector("#create-new-client-form");

    const dashboard = document.querySelector(".dashboard-container");
    console.log(dashboard);

    let clientBtn = dashboard.querySelector(".new-client-button");
    console.log("add client button:", clientBtn)

    // const editBtn = dashboard.querySelector(".btn-edit");


    clientBtn.addEventListener("click", () => {
        showModal()
    });


    modal.addEventListener("click", (event) => {
        if (event.target.className === "modal-container") {
            hideModal();
        }
    })


    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const newClient = { ...loadedClient };


        // validate that each form field, if it is valid, then call the function to create the new instance
        let isValid = true;

        for(const [key, value] of formData) {
            newClient[key] = value;

            if(!value || value.trim() === '') {
                isValid = false;
                console.error(`The field ${key} is required`)
            }
        }

        try {

            if (isValid) {

                if (loadedClient.id) {
                    await updateClient({ clientData: newClient })
                    console.log("Editing client with ID:", loadedClient.id);
                } else {
                    const createdClient = await addClient({ clientData: newClient })
                    console.log("Data being sent:", newClient);
                    console.log(createdClient);
    
                    if (!createdClient) {
                        throw new Error("Failed API call. Try again!");
                    }
                }


                hideModal(); // render table agaiN!
                await CreateTable()
            }

        } catch (error) {
            console.error(`could not create new data, ${error}`);
        }
    })
}

export const showModal = async(id) => {
    modal?.classList.remove("hide-modal");
    // setFormValues(client);
    if (!id) return;

    const clientId = await getClient(id);
    setFormValues(clientId); // this help us "autofill" the form when trying to edit!
}

const hideModal = () => {
    modal?.classList.add("hide-modal");
    form.reset();
}


const setFormValues = (client) => {
    form.querySelector('[name="name"]').value = client.name;
    form.querySelector('[name="phone"]').value = client.phone;
    form.querySelector('[name="email"]').value = client.email;
    form.querySelector('[name="company"]').value = client.company;
    form.querySelector('[name="contact-date"]').value = client.contactDate;

    loadedClient = client;
}
