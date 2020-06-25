import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Perfil';
  profileJson: string = null;

  constructor(public auth: AuthService, private titleService: Title) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => this.profileJson = JSON.stringify(profile, null, 2)
    );

    this.titleService.setTitle(this.title);
  }

}
