import { Routes } from '@angular/router';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';

export const routes: Routes = [
    { path: 'contact/new', component: NewContactComponent },
    { path: 'contact', component: ContactHomeComponent},
    { path: '**', redirectTo: 'contact'}
];
