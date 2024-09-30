import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/Servicios/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    username: "",
    email: "",
    password: ""
  }
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    console.log(this.user)
    this.storage.set(this.user.username, this.user);
    this.router.navigate(['/home'])
  }

}
