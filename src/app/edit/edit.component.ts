import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private _studentsService: StudentsService,
    private router: Router,
    private routers: ActivatedRoute
    ) { }

 
  addForm: FormGroup;
  ngOnInit(){

    const routerParams = this.routers.snapshot.params;
    //console.log(routerParams.id);
    this._studentsService.getById(routerParams.id)
    .subscribe((data: any) => {
      //console.log(data);
      this.addForm.patchValue(data);

    });
    this.addForm = this.formBuilder.group({
     
      fName: ['', Validators.required],
      lName: ['', Validators.required, Validators.maxLength(9)],
      email: ['', Validators.required, Validators.maxLength(30)]

    });
  }
  update(){
    console.log("Update");
  }

}
