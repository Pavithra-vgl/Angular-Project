import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contact =new FormGroup({
name: new FormControl('',Validators.required),
mobile: new FormControl('',Validators.required),
email: new FormControl('',Validators.required),
password: new FormControl('',Validators.required),
address: new FormControl('',Validators.required),
});
get name() {return this.contact.get('name')};
get mobile() {return this.contact.get('mobile')};
get email() {return this.contact.get('email')};
get password() {return this.contact.get('password')};
get address() {return this.contact.get('address')};

saveReactive(){
  console.log(this.contact.value);
}

}