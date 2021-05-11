import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  regForm: FormGroup;
  //submitted: false;
  public newData:any;
  submitted: boolean;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      'city': new FormControl('', [Validators.required]) ,
      'panNumber': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      'fullName': new FormControl('', [Validators.required, Validators.maxLength(140)]),
      'email': new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      'mobileNumber': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'otp': new FormControl('', [Validators.required, Validators.maxLength(4)])
    });
  }

  get formData(){ return this.regForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.regForm.invalid){
      return;
    }
    alert(JSON.stringify(this.regForm.value));

  }  
}
