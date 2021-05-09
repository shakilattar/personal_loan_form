import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      city:['', Validators.required],
      panNumber:['', [Validators.required, Validators.maxLength(10)]],
      fullName:['', [Validators.required, Validators.maxLength(140)]],
      email:['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      mobileNumber:['', [Validators.required, Validators.minLength(10)]],
      otp:['', [Validators.required, Validators.minLength(4)]]
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
