import { Component, OnInit } from "@angular/core";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
@Injectable()
export class HomeComponent implements OnInit {
  configUrl = "https://reqres.in/api/users?page=2";

  ngOnInit() {}

  constructor(private httpClient: HttpClient) {}
  /*
  public fetchUsers() {
      return this.httpClient.get("/api/users").map((res: Response) => res.json())
  }
*/
  getConfig() {
    let getData = this.httpClient.get(this.configUrl);
    console.log(getData);
  }
}
