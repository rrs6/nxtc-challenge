import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/ContactService';
import { Contact } from '../../models/Contact';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContactFieldsName } from '../../enums/ContactFieldsName';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-home.component.html',
  styleUrl: './contact-home.component.css'
})

export class ContactHomeComponent {
  public BooleanLabels: { [key: string]: string } = {
    'true': 'Sim',
    'false': 'Não'
  };

  public $contacts: Observable<Contact[]> = of([]);
  public contactHeaders = Object.values(ContactFieldsName);

  constructor(private contactService: ContactService) {
    this.$contacts = this.contactService.getAllContact();
  }

}
