export const getClients = async() => {
    const res = await fetch('http://localhost:3001/clients');
    const data = await res.json();

    return data;
}