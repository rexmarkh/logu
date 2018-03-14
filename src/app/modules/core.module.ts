import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

//Services
import { AuthService } from '../services/auth.service';
import { ItemService } from '../services/item.service';


@NgModule({
  imports: [
    CommonModule,
    // imports firebase/app needed for everything
    AngularFireModule.initializeApp(environment.firebase),
    // imports firebase/firestore, only needed for database features 
    AngularFirestoreModule,
    // imports firebase/auth, only needed for auth features 
    AngularFireAuthModule, 
  ],
  declarations: [],
  providers: [
    AuthService,
    ItemService
  ]
})
export class CoreModule { }
