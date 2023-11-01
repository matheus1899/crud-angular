import { Course } from './../model/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(){}
  getCourseList() : Course[]{
    return [
      { _id: "1", name: "Angular", category: "Front-End" },
      { _id: "2", name: "Java 17", category: "Geral"},
      { _id: "3", name: "Vue.js",  category: "Front-End"},
      { _id: "4", name: "Spring Boot", category: "Back-End"}
    ];
  }
}
