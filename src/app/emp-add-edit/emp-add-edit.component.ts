import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  constructor(private __fb: FormBuilder, private __empService: EmployeeService, private __dialogRef: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private _coreService: CoreService) {
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
    this.empForm.patchValue(this.data);
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

  onFormSubmit() {

    if (this.empForm.valid) {
      if (this.data) {
        // console.log(this.empForm.value);
        this.__empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          //define an object
          next: (val: any) => {
            //if success get the result here
            this._coreService.openSnackBar("Employee Updated!");
            this.__dialogRef.close(true);
          },
          //if any error here
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        // console.log(this.empForm.value);
        this.__empService.addEmployee(this.empForm.value).subscribe({
          //define an object
          next: (val: any) => {
            //if success get the result here
            this._coreService.openSnackBar("Employee Added successfully")
            this.__dialogRef.close(true);
          },
          //if any error here
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }
}
