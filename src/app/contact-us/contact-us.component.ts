import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form:any = FormGroup;
  submitted = false;
  show = false;
  errors ="";

  datas:any;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email :['',[
          Validators.required,
          Validators.pattern(/^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},?)+$/)
        ]],
        contact:['', Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.minLength(10),Validators.maxLength(15)])],
        subject:['', [Validators.required,Validators.maxLength(30)]],
        comments:['', Validators.required,Validators.maxLength(200)],

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


