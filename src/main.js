import { CreateTable } from './components/CreateTable';
// import { getClients } from './services/api'
import './style.css'
import { renderDashboard } from './views/DashboardView';

document.querySelector('#app').innerHTML = `
  <div class="dashboard-container">
    <div class="principal-div"></div>
  </div>
`

// async function getClientsData() {
//   const clientsData = await getClients();
  
//   clientsData.forEach(client => {
//     ClientCard(client)
//   });
// }

// getClientsData();

// create table
const element = document.querySelector(".principal-div");
renderDashboard();
// CreateTable(element);
