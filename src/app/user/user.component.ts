import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  sub: any;
  user;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let name = params['name'];
      this._hackerNewsAPIService.fetchUser(name).subscribe(data => {
        this.user = data;
      }, error => console.log("Could not load user " + name));
    });
  }

}
