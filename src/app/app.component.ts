import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MatToolbarModule,AcceuilComponent,InscriptionComponent,ConnexionComponent,CommandeComponent,PanierComponent,
    MatListModule,MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dsi2-2';
}
