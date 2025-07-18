import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contact = {
    name: '',
    email :'',
    message:''
  };

  submitted= false

  onSubmit(form:any) :void {
    if(form.valid){
      this.submitted = true;
      console.log(' Form data' , this.contact)
    }
  }
}
