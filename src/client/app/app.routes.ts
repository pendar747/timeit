import { Routes } from '@angular/router';

import { TimelineRoutes } from './timeline/index';
import { TodayRoutes } from './today/index';

export const routes: Routes = [
  ...TodayRoutes,
  ...TimelineRoutes
];
