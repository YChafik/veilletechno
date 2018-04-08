//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology';

@Injectable()
export class DataService {

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

  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }
}
