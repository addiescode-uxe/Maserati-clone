import MainContainer from '../containers/MainContainer';
import { PathItem } from '../models/route.model';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: true,
  },
];

export default appRoutes;
