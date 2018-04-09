//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology';

@Injectable()
export class DataService {


  categories: String[] = ['Front', 'Back', 'Fullstack', 'Hybride', 'Autre'];

  constructor(/*public http: HttpClient*/) {
    console.log('Hello DataProvider Provider');
  }

  technologies: Technology[] = [
    { name: 'Angular', category: 'Front' },
    { name: 'PWA', category: 'Hybride' },
    { name: 'Ionic', category: 'Hybride' },
    { name: 'Node', category: 'Backend' }
  ];

  getAllTechnologies() {
    return this.technologies;
  }

  getAllCategories() {
    return this.categories;
  }

  addTechnology(technology: Technology) {
    this.technologies = [...this.technologies, technology];
    console.log(this.technologies);
  }

  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }
}
