import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root' //root => disponivel globalmente no app
})
export class CoursesService {
  private readonly API = '../../../assets/courses.json'

  constructor(private httpClient : HttpClient){}
  
  getCourseList() : Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.API)
                          .pipe(      // Permite manipular o resultado de maneira reativa.
                            //take(1),  // Captura a primeira leva de informações e encerra conexão
                            first(),
                            tap(courses => console.log(courses))
                          ); 
  }
}
