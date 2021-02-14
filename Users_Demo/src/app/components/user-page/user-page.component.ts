import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit {

  user: User;
  loaded: Boolean;

  constructor(private activatedRoute:ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    this.loaded = false;
    this.activatedRoute.queryParams.subscribe(
      data => {
        this.userService.getUser(data.id).subscribe(
          user => {
            this.user = user;
            this.loaded = true;
          },
          error => {
            this.loaded = true;
          }
        );
      }
    );
  }

}
