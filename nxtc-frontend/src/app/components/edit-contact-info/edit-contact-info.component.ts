import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/ContactService';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/Contact';
import { map } from 'rxjs';
import { ContactDTO } from '../../dtos/ContactDTO';

@Component({
  selector: 'app-edit-contact-info',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-contact-info.component.html',
  styleUrl: './edit-contact-info.component.css'
})
export class EditContactInfoComponent implements OnInit {

  public profileForm: FormGroup;
  public contact!: Contact;
  public contactId!: string;
  public error: { message: string, isError: boolean } = { message: "", isError: false };
  public edited: { message: string, isEdited: boolean } = { message: "", isEdited: false };

  constructor(private contactService: ContactService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      cellphone: [ '', Validators.required],
      favorite: [false],
      active: [false]
    });
  }
  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id') as string;
    this.contactService.getContactById(this.contactId).pipe(map((value: ContactDTO) =>
      new Contact(value.id as number, value.name, value.email, value.telephone, value.cellphone, value.favorite, value.active as boolean)
    )).subscribe({
      next: (value: Contact) => {
        this.contact = value;
        this.profileForm = this.fb.group({
          name: [this.contact.getName(), Validators.required],
          email: [this.contact.getEmail(), [Validators.required, Validators.email]],
          telephone: [this.contact.getPhone(), Validators.required],
          cellphone: [this.contact.getCellphone(), Validators.required],
          favorite: [this.contact.isFavorite()],
          active: [this.contact.isActive()]
        });
      },
      error: (error) => {
        this.error = { isError: true, message: error.error };
        setTimeout(() => {
          this.error.isError = false;
          this.router.navigate(['/']);
        }, 2000);
      }
    });
  }

  onSaveContactInfo() {
    if (!this.profileForm.invalid) {
      this.contactService.editContactInfo(this.contactId, this.profileForm.value as ContactDTO).pipe(map((contact: ContactDTO) =>
        new Contact(contact.id as number, contact.name, contact.email, contact.telephone, contact.cellphone, contact.favorite, contact.active as boolean)
      )).subscribe({
        error: (error) => {
          this.error = { isError: true, message: error.error };
          setTimeout(() => {
            this.error.isError = false;
          }, 2000);
        },
        next: (contact: Contact) => {
          this.edited = { isEdited: true, message: `Contact was edited succssesfully!` };
          setTimeout(() => {
            this.edited.isEdited = false;
            this.router.navigate(['/']);
          }, 2000);
        }
      });

    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
