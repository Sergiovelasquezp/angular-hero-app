import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { HeoresComponent } from "./components/heores/heores.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeoresComponent },
  { path: "about", component: AboutComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "search/:searchTerm", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
