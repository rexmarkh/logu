import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})

export class EmployeeManagementComponent implements OnInit {
  modalRef: BsModalRef;
  showLoader:boolean = true;
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  item: Item = {
    name : '',
    age : null,
    gender: '',
    phone : '',
    aadhaar : '',
  }

  constructor(private router: Router, private itemService: ItemService, private modalService: BsModalService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.showLoader = false;
      // console.log(items);
    });
    // if(this.router.url === '/admin')
    // console.log("this is admin page");
    // else
    // console.log("this is employee management page");
  }

  deleteItem(event, item: Item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

  onSubmit(){
    if(this.item.name != '' && this.item.phone != ''){
      this.itemService.addItem(this.item);
      this.item.name = '';
      this.item.age = null;
      this.item.gender = '';
      this.item.phone = '';
      this.item.aadhaar = '';      
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>, event, item: Item ) {
    this.modalRef = this.modalService.show(template);
    this.editState = true;
    this.itemToEdit = item;
  }
}
