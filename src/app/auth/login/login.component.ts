import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  login : FormGroup;
  register : FormGroup;
    
  get f(): any { return this.login.controls; }
  get r(): any { return this.register.controls; }
   
    
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.login = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.register = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.login.valid){
      this._snackBar.open('Login successfully','Close');
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token','svsddbdsbdbdbb');
      localStorage.setItem('userType','admin');
    }    
  }

  onRegister(){
    console.log('Register');
    this.register.reset();
    //this.register.setErrors(null);
  }
   

}
