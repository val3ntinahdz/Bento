const url = `${ import.meta.env.VITE_BASE_URL }/clients`;

export const getClients = async() => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const getClient = (id) => {
    
}

export const saveUser = () => {

}

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

export const updateClient = () => {

}