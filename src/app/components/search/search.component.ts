import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroeService } from "../../services/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  searchTerm: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _heroeService: HeroeService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.searchTerm = params["searchTerm"];
      this.heroes = this._heroeService.buscarHeroes(params["searchTerm"]);
    });
  }
  verHeroe(idx: number) {
    this._router.navigate(["/heroe", idx]);
  }
}
