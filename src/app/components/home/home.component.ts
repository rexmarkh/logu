import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: AngularFirestoreCollection<any>;
  item: Observable<any[]>;  
  noteDoc : AngularFirestoreDocument<any>;
  showLoader:boolean = true;
  snapshot:any;
  newContent:string;
  constructor(private afs: AngularFirestore) {
  }
  ngOnInit() {
    this.items = this.afs.collection('users', ref => {
      return ref.orderBy('displayName').orderBy('uid');
    });
    // this.snapshot = this.items.snapshotChanges()
    //   .map(arr => {
    //     console.log(arr)
    //     arr.map(snap => snap.payload.doc.data())
    //   });
    // this.noteDoc = this.afs.doc('users/uAkdtjLihwY4kwA1xyTMdcYW79V2')
    this.item = this.items.valueChanges();
    this.item.subscribe(() => this.showLoader = false);
          
  }
  // updateContent(){
  //   this.noteDoc.update({displayName: this.newContent})
  // }
}
