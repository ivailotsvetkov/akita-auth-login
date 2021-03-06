import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { SessionService } from "../session/state/session.service";
import { SessionQuery } from "../session/state/session.query";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent implements OnInit {
  name$: Observable<string>;

  constructor(
    private authService: SessionService,
    private authQuery: SessionQuery,
    private router: Router
  ) {}

  ngOnInit() {
    this.name$ = this.authQuery.name$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
