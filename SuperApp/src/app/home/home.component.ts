import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public url=`http://127.0.0.1:8000`;
  post: any;
  constructor(private http: HttpClient,private toast:ToastService) {
    this.getAll();
   }

  ngOnInit() {
  }
 public async getAll(){
  await this.http.get(`${this.url}/api/posts`).subscribe(res=>{
    this.post=res;console.log(res);
  this.toast.success(' WELCOME TO SUPERNATURAL ENCOUNTER FROM PASTOR WINNER')
})
 }
}
