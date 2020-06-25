import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Inicio';

  constructor(public auth: AuthService, private titleService:Title) {}

  ngOnInit() {
	 this.titleService.setTitle(this.title);
  }

}