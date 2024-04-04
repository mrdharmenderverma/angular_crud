import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  constructor(private __fb: FormBuilder, private __empService: EmployeeService, private __dialogRef: MatDialogRef<EmpAddEditComponent>) { 
    this.empForm = this.__fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }
    

  ngOnInit(): void {
  }

  //creating an variable
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  //define a form here
  empForm: FormGroup;

  onFormSubmit(){
    if (this.empForm.valid) {
      // console.log(this.empForm.value);
      this.__empService.addEmployee(this.empForm.value).subscribe({
        //define an object
        next: (val: any) => {
          //if success get the result here
          alert("Employee Added successfully");
          this.__dialogRef.close();
        },
        //if any error here
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }
}
