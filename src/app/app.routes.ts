import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Главная' },
  { path: 'menu', component: MenuPage, title: 'Меню' },
  { path: '**', redirectTo: '' }
];
