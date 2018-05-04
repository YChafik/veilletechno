import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Schedule } from '../../models/schedule';
import { Technology } from '../../models/technology';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  schedule: Schedule = {

    name: '',
    date: '',
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  }; 

  technologies: Technology[];  
  categories: string[];
  priorities: string[];

  isInEditMode = false;

  constructor(
    // Public
    public navCtrl: NavController, 
    // Private
    private navParams: NavParams, 
    private dataService: DataService, 
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    this.categories = this.dataService.getAllCategories(); 
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
    this.toastCtrl.create({
      message: 'Votre tâche a été crée.',
      duration: 2000,
      cssClass: 'ok'
    }).present();
    this.dataService.edit(this.schedule);
  }

  resetSchedule() {
      this.schedule =  {
        name: '',
        date: null,
        duration: 0,
        priority: '',
        remark: '',
        technology: { name: '', category: ''}
    }
  }

}
