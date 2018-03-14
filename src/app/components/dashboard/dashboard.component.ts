import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Employee{
  name : string;
  age :number;
  gender: string;
  phone : string;
  aadhaar : string;
  uid?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  employeeCollection:  AngularFirestoreCollection<Employee>;
  employeeDoc:  AngularFirestoreDocument<Employee>;  
  employees: Observable<Employee[]>;
  showLoader:boolean = true;
  newContent:string;
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.employeeCollection = this.afs.collection('employees');
    this.employees = this.employeeCollection.valueChanges();
    this.employeeDoc = this.afs.doc('employees/W4ZWlNwt4meLKBrWvGa6');
    this.employees.subscribe(() => this.showLoader = false);
  }

  updateContent(){
    this.employeeDoc.update({aadhaar: this.newContent});
  }
}
