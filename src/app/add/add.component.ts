import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _studentsService: StudentsService,
    private router: Router
    ) { }

  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
     
      fName: ['', Validators.required],
      lName: ['', Validators.required, Validators.maxLength(9)],
      email: ['', Validators.required, Validators.maxLength(30)]

    });
  }
  onSubmit(){
    //console.log(this.addForm.value);
    //ngOnInit(): void {
      this._studentsService.createStudent(this.addForm.value).subscribe(data => {
        this.router.navigate(['view']);
        //console.log(this.students);
  
      });
    }

}
