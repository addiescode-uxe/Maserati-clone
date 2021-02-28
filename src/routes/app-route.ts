import MainContainer from '../containers/Main';
import { PathItem } from '../models/route.model';
import CarCustomContainer from '../containers/ CarCustom/index';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: true,
  },
  {
    path: '/customCar',
    component: CarCustomContainer,
    exact: true,
  },
];

export default appRoutes;
