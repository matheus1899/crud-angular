import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses:Course[] = [
    { _id: "1", name: "Angular", category: "Front-End" },
    { _id: "2", name: "Java 17", category: "Geral"}
  ];
  displayedColumns:string[] = ['name', 'category']

  constructor() {
    //this.courses = []
  }
  ngOnInit(): void {
  }
}
