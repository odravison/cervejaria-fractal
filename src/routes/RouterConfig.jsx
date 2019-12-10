import Home from '../components/screens/Home/Home';
import BeerList from '../components/screens/BeersList/BeersList';
import BeersDetail from '../components/screens/BeersDetail/BeersDetail';

export const routes = {
  home: {
    path: "/",
    component: Home
  },
  beersList: {
    path: "/beers",
    component: BeerList,
    routes: {
      detail: {
        path: "/beers/:id/detail",
        component: BeersDetail
      }
    }
  }
};