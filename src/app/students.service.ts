import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Students[]>('http://localhost:8080/angular7phpcrud/list.php');

  }
  deleteStudent(id: number){
    return this.http.delete<Students[]>('http://localhost:8080/angular7phpcrud/delete.php?id=' + id);

    

  }
  createStudent(student: Students){
    return this.http.post('http://localhost:8080/angular7phpcrud/insert.php', student);

    

  }
  getById(id: number){
    return this.http.get<Students[]>('http://localhost:8080/angular7phpcrud/getById.php?id=' + id);


  }
  
  }
  

