import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';




export const routes: Routes = [
    {
        path:'acceuil',component:AcceuilComponent
    },
    {
        path:'inscription',component:InscriptionComponent
    },
    {
        path:'connexion',component:ConnexionComponent
    },
    {
        path:'commande',component:CommandeComponent
    },
    {
        path:'panier',component:PanierComponent
    },
];
