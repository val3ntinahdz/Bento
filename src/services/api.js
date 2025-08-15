const url = `${ import.meta.env.VITE_BASE_URL }/clients`;

export const getClients = async() => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const getClient = async(id) => {
    const clientURL = `${ url }/${ id }`;
    const res = await fetch(clientURL);
    const client = await res.json();

    console.log(client);

    return client;
}

// export const saveUser = async(id)


export const addClient = async({ clientData }) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(clientData)
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const newClient = await res.json();
        console.log({ newClient });

        return newClient;

    } catch(error) {
        console.log(`Could not create new user: ${error}`);
    }
} 


export const updateClient = async({ clientData }) => {
    const clientToUpdate = `${ url }/${ clientData.id }`;

    console.log("Request details:", {
    method: "PATCH",
    url: clientToUpdate,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(clientData) // This is what you're currently sending
    });
    
    try {
        const res = await fetch(clientToUpdate, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(clientData)
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const updatedClient = await res.json();
        console.log(updatedClient);

        return updatedClient;

    } catch(error) {
        console.log(`Could not create new user: ${error}`);
    }

    console.log("Attempting to update at:", clientToUpdate);
    console.log("With body:", { id: clientData.id });
}

export const deleteClient = async(id) => {
    const clientToDelete = `${ url }/${ id }`;

    const res = await fetch(clientToDelete, {
        method: "DELETE",
    });

    const deleteResult = res.json();
    console.log("The object deleted", await deleteResult);

    return deleteResult;
}