import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  form:any = FormGroup;
  submitted = false;
  show = false;
  errors ="";

  datas:any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    
    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
        dob :['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        email :['',[
          Validators.required,
          Validators.pattern(/^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},?)+$/)
        ]],
        contact:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.minLength(10),Validators.maxLength(15)])],
        std:['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        div:['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
        percentage:['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      


        });
      }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.show =true;

    if (this.form.invalid) {
      return;
    }

   }

  }


