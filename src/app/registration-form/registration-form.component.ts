import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  submitForm(event:any){
    // event.preventDefault();
    alert("Form is submitted");
    alert(event.value.username);
  }

  getValue(username:any){

  }
}
