import { ClientCard } from './components/ClientCard';
import { getClients } from './services/api'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="principal-div">
    <h1>hola</h1>
  </div>
`

async function getClientsData() {
  const clientsData = await getClients();
  
  clientsData.forEach(client => {
    ClientCard(client)
  });
  // console.log(...clientsData);
}

getClientsData();

// setupCounter(document.querySelector('#counter'))
