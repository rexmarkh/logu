import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showLoader:boolean = true;
  constructor( public auth:AuthService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

}
