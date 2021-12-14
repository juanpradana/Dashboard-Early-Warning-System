import HomePage from '../views/pages/homePage';
import AboutPage from '../views/pages/aboutPage';
import DashboardPage from '../views/pages/dashboardPage';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/about': AboutPage,
  '/dashboard/:codeUnit': DashboardPage,
};

export default routes;
