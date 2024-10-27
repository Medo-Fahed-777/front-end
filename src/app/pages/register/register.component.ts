import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    RouterLink,
    CommonModule,
    DialogModule,
    ButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  successDialog = false
  isNotLinked = false;
  divisions = [
    { name: 'Division 1' },
    { name: 'Division 2' },
    { name: 'Division 3' },
  ];
  ministries = [
    { name: 'Ministry of Education' },
    { name: 'Ministry of Health' },
    { name: 'Ministry of Finance' },
  ];
  positions = [
    { name: 'Manager' },
    { name: 'Supervisor' },
    { name: 'Employee' },
  ];
  otherParties = [
    { name: 'Party 1' },
    { name: 'Party 2' },
    { name: 'Party 3' },
  ];
  constructor(private cd: ChangeDetectorRef) {
    this.registerForm.get('otherParty')?.disable();
  }

  ngAfterViewInit() {
    // Select the element using the CSS selector
    const element = document.querySelector('.p-dialog-content');
    console.log(element);

    // Check if the element exists
    if (element) {
      // Clear the text inside the element
      element.innerHTML = element.innerHTML.replace(/&nbsp;/g, '');
    }
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    division: new FormControl('', [Validators.required]),
    ministry: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    otherParty: new FormControl('', [Validators.required]),
  });
  notLinked(event: Event) {
    event.preventDefault();
    this.isNotLinked = !this.isNotLinked;
    this.registerForm.get('division')?.disable();
    this.registerForm.get('ministry')?.disable();
    this.registerForm.get('position')?.disable();
    this.registerForm.get('otherParty')?.enable();
    this.cd.detectChanges();
    console.log(this.registerForm.valid);
  }

  sendData() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Perform your send data logic here
      this.successDialog = true;
      console.log(this.successDialog);
    } else {
      this.cd.detectChanges();
      console.log('not valid');
    }
    this.cd.detectChanges();
  }
  isDisabledFn() {
    if (this.registerForm.valid) {
      return true;
    } else {
      return false;
    }
  }
  hideDialog() {
    this.successDialog = false;
  }
}
