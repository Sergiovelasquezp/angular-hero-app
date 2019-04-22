import { Component, OnInit } from "@angular/core";
import { HeroeService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heores",
  templateUrl: "./heores.component.html",
  styleUrls: ["./heores.component.scss"]
})
export class HeoresComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private _heroeServire: HeroeService, private _router: Router) {}

  ngOnInit() {
    this.heroes = this._heroeServire.getHeroes();
  }

  verHeroe(idx: number) {
    console.log(idx);
    this._router.navigate(["/heroe", idx]);
  }
}
