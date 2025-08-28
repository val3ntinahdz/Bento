import './style.css'

import { renderModal } from './clients/presentation/renderModal';
import { createClientDetailPanel } from './components/showDetailPanel';
import { createForm } from './components/createForm';
import { createAlertHTML } from './components/showAlert';
import { renderDashboard } from './views/DashboardView';

document.querySelector('#app').innerHTML = `
  <div class="dashboard-container"></div>
`

renderDashboard();
createForm();
renderModal();
createAlertHTML();
createClientDetailPanel();