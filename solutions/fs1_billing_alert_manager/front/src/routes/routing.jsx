import Alarm from "../views/alarm";
import Dashboard from "../views/dashboard";
import Image from "../views/image";
import Instance from "../views/instance";


var Routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'mdi mdi-view-dashboard',
    component: Dashboard
  },
  { 
    path: '/image', 
    name: 'Images', 
    icon: 'mdi mdi-cube-outline', 
    component: Image 
  },
  {
    path: '/alarms',
    name: 'Alerts',
    icon: 'mdi mdi-alarm',
    component: Alarm
  },
  {
    path: '/instance',
    name: 'Instances',
    icon: 'mdi mdi mdi-animation',
    component: Instance
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default Routes;
