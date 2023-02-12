import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ordinary-page',
  templateUrl: './ordinary-page.component.html',
  styleUrls: ['./ordinary-page.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class OrdinaryPageComponent {
  constructor() {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  get name() {
    return this.form.get('name');
  }

  get age() {
    return this.form.get('age');
  }

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.form.reset();
    }
  }
}
