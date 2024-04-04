import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  constructor(private __fb: FormBuilder) { 
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
      console.log(this.empForm.value);
    }
  }
}
