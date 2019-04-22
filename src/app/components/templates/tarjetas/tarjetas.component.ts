import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.scss"]
})
export class TarjetasComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;

  constructor(private _router: Router) {}

  ngOnInit() {}

  verHeroe(idx: number) {
    this._router.navigate(["/heroe", this.idx]);
  }
}
