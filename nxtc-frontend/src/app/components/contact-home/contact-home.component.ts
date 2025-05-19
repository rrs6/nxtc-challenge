import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/ContactService';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact-home',
  imports: [],
  templateUrl: './contact-home.component.html',
  styleUrl: './contact-home.component.css'
})
export class ContactHomeComponent implements OnInit{
  contacts: Contact[] = [];
  loading: boolean = true;
  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.contacts = this.getAllContact();
    console.log(this.contacts);
    this.loading = false;
  }

  getAllContact(): Contact[] {
    return this.contactService.getAllContact();
  }

}
