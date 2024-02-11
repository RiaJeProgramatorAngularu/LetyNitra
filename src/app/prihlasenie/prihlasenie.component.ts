import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-prihlasenie',
  templateUrl: './prihlasenie.component.html',
  styleUrls: ['./prihlasenie.component.css'],
  // imports: [NgIf, CommonModule],
})
export class PrihlasenieComponent implements OnInit {
  errMsg: boolean = false;
  errorMessage$!: Observable<boolean>;
  registerFormSubmitted: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // role: new FormControl('student', [Validators.required]),
  })

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  // loginWithGoogle() {
  //   this.authService.signInWithGoogle().then((res: any) => {
  //     this.router.navigateByUrl('letiskoNitra');
  //   }).catch((error: any) => {
  //     console.log(error);
  //   });
  // }

  loginWithEmailAndPassword() {
    const userData = Object.assign(this.loginForm.value, {email: this.loginForm.value.username});
    this.authService.signInWithEmailAndPassword(userData).then((res: any) => {
      this.router.navigateByUrl('letiskoNitra');
    }).catch((error: any) => {
      console.log(error);
    });
  }

  registerWithEmailAndPassword() {
    this.registerFormSubmitted = true;
    const passwordControl = this.registerForm.get('password');

    // if (this.registerForm.invalid || !passwordControl || passwordControl.value.length < 6) {
    //   // Handle the case when the form is invalid or password is less than 6 characters
    //   return;
    // }

    const userData = Object.assign(this.registerForm.value, {email: this.registerForm.value.email});
    this.authService.registerWithEmailAndPassword(userData).then((res: any) => {
      this.router.navigateByUrl('letiskoNitra');
    }).catch((error: any) => {
      console.log(error);
    });
  }

  // errorMessage(): boolean {
  //   if (this.registerForm.controls['repeatPassword'].hasError('required')) {
  //     // return  this.errMsg == true;
  //
  //     return true;
  //   } else {
  //     return false
  //   }
  // }
}
