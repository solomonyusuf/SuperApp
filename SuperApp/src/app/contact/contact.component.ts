import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import Contact from '../Models/contact';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  public url=`http://127.0.0.1:8000`;
  public contact: Contact = {
    id:'',
    fullname: '',
    phoneNumber: '',
    email: '',
    message: '',
  }
  constructor(private http: HttpClient,private toast:ToastService, private route: ActivatedRoute, private router: Router) {}
  public async submit() {
    try {
      let data = {
        fullname: this.contact.fullname,
        phoneNumber: this.contact.phoneNumber,
        email: this.contact.email,
        message: this.contact.message,
      }
      await this.http.post(`${this.url}/api/contact/`, data).subscribe(res => {
         console.log(res);
         this.router.navigate(['/contact']);
         this.contact.fullname = null;
         this.contact.phoneNumber = null;
         this.contact.email = null;
         this.contact.message = null;
         this.toast.success('You have sucessfully submitted the form.')
        })
    } catch (e) {
      console.log(e);
    }
  }

}
