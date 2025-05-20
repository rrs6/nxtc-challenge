import { Routes } from '@angular/router';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';
import { EditContactInfoComponent } from './components/edit-contact-info/edit-contact-info.component';

export const routes: Routes = [
    { path: 'contact/new', component: NewContactComponent },
    { path: 'contact', component: ContactHomeComponent},
    { path: 'contact/:id', component: EditContactInfoComponent},
    { path: '**', redirectTo: 'contact'}
];
