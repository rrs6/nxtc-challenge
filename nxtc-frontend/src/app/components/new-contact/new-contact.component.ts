import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/ContactService';
import { ContactDTO } from '../../dtos/ContactDTO';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {
  public profileForm: FormGroup;
  public error: { message: string, isError: boolean } = { message: "", isError: false };
  public created: {message: string, isCreated: boolean} = {message: "", isCreated: false};

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      cellphone: ['', Validators.required],
      favorite: [false]
    });
  }

  handleSubmit() {
    if (!this.profileForm.invalid) {
      this.contactService.createNewContact(this.profileForm.value as ContactDTO).subscribe({
        error: (error) => {
          this.error = { isError: true, message: error.error };
          setTimeout(() => {
            this.error.isError = false;
          }, 2000);
        },
        next: (id: number) => {
          this.created = {isCreated: true, message: `Contact with id: ${id} was created succssesfully!`};
          setTimeout(() => {
            this.created.isCreated = false;
            this.router.navigate(['/']);
          }, 2000);
        }
      });

    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
