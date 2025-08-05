import { RenderModal } from './clients/presentation/renderModal';
import { CreateForm } from './components/CreateForm';
// import { getClients } from './services/api'
import './style.css'
import { renderDashboard } from './views/DashboardView';

document.querySelector('#app').innerHTML = `
  <div class="dashboard-container"></div>
`

// async function getClientsData() {
//   const clientsData = await getClients();
  
//   clientsData.forEach(client => {
//     ClientCard(client)
//   });
// }

// getClientsData();

// render dashboard with table view
renderDashboard();
CreateForm();
RenderModal();
