import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';

@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {

  categories : String[];
  technology: Technology = { name: '', category:''};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService) {
  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
  }

  addTechnology() {
    this.dataService.addTechnology(this.technology);
    this.technology = { name: '', category: ''};
  }

}
