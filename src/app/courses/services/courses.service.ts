import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //root => disponivel globalmente no app
})
export class CoursesService {
  constructor(private httpClient : HttpClient){}
  getCourseList() : Course[]{
    return [
      { _id: "1", name: "Angular", category: "Front-End" },
      { _id: "2", name: "Java 17", category: "Geral"},
      { _id: "3", name: "Vue.js",  category: "Front-End"},
      { _id: "4", name: "Spring Boot", category: "Back-End"}
    ];
  }
}
