
import { Routes } from '@angular/router';
import { Lista } from './lista/lista';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: Lista },
  { path: '**', redirectTo: 'lista' }
];
