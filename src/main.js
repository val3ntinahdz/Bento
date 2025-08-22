import { RenderModal } from './clients/presentation/RenderModal';
import { createClientDetailPanel } from './components/ShowDetailPanel';
import { CreateForm } from './components/CreateForm';
import { createAlertHTML } from './components/ShowAlert';
import './style.css'
import { renderDashboard } from './views/DashboardView';

document.querySelector('#app').innerHTML = `
  <div class="dashboard-container"></div>
`

renderDashboard();
CreateForm();
RenderModal();
createAlertHTML();
createClientDetailPanel();
// showDetailPanel();