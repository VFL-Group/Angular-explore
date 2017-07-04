import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title:string = 'hurt each other';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('this is init function!');
  }

  goProject(): void {
    this.router.navigate(['/project']);
  }
}
