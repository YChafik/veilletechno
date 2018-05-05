import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DataService } from '../../providers/data/data.service'
import { Technology } from '../../models/technology'

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[];

  constructor(
    // Public
    public navCtrl: NavController, 
    public navParams: NavParams,
    // Private
    private dataService: DataService,
    private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.dataService.getAllTechnologies().then( data => this.technologies = data );
  }

  search(event){
    this.technologies = this.dataService.search(event.target.value.trim());
  }

}
