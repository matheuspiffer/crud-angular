import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-headers",
  templateUrl: "./headers.component.html",
  styleUrls: ["./headers.component.css"],
})
export class HeadersComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerService.headerData.title;
  }
  get icon(): string {
    return this.headerService.headerData.icon;
  }
  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
