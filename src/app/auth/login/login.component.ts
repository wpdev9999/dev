import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login : FormGroup;
  get f(): any {
    return this.login.controls;
    }
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) {
    this.login = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.login.valid){
      this._snackBar.open('Done','Close');
    }
  }

}
