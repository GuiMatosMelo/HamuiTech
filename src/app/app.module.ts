import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GridUnidadesComponent } from './pages/home/grid-unidades/grid-unidades.component';
import { GridQuemSomosComponent } from './pages/home/grid-quem-somos/grid-quem-somos.component';
import { GridServicosComponent } from './pages/home/grid-servicos/grid-servicos.component';
import { GridFaqComponent } from './pages/home/grid-faq/grid-faq.component';
import { GridProvaSocialComponent } from './pages/home/grid-prova-social/grid-prova-social.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { NgxSplideModule } from 'ngx-splide';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    ServicosComponent,
    UnidadesComponent,
    GridUnidadesComponent,
    GridQuemSomosComponent,
    GridServicosComponent,
    GridFaqComponent,
    GridProvaSocialComponent,
    CardComponent,
    CardHomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgxSplideModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
