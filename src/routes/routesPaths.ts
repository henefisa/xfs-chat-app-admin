import Dashboard from 'src/components/Dashboard';
import Customers from 'src/components/Customers';
import Settings from 'src/components/Settings';

const routePaths = [
  { path: '/', component: Dashboard },
  { path: '/customers', component: Customers },
  { path: '/settings', component: Settings },
];

export default routePaths;
