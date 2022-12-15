import Customers from '@modules/Customers';
import Dashboard from '@modules/Dashboard';
import Settings from '@modules/Settings';

const routePaths = [
  { path: '/', component: Dashboard },
  { path: '/customers', component: Customers },
  { path: '/settings', component: Settings },
];

export default routePaths;
