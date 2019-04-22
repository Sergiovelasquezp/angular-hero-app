import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//rutas
import { AppRoutingModule } from "./app.routingModule";

//services
import { HeroeService } from "./services/heroes.service";

//custom components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeoresComponent } from "./components/heores/heores.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/templates/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HeoresComponent,
    HeroeComponent,
    SearchComponent,
    TarjetasComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
