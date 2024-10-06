import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder // private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('/');
    // this.isLoading = true;
    // const login$ = this.authenticationService.login(this.loginForm.value);
    // login$
    //   .pipe(
    //     finalize(() => {
    //       this.loginForm.markAsPristine();
    //       this.isLoading = false;
    //     }),
    //     // untilDestroyed(this)
    //   )
    //   .subscribe({
    //     next: (credentials: any) => {
    //       if (credentials) {
    //         console.debug(`${credentials.username} successfully logged in`);
    //         this.router.navigate(
    //           [this.route.snapshot.queryParams['redirect'] || '/'],
    //           { replaceUrl: true }
    //         );
    //       } else {
    //         console.debug(`Login error: No credentials`);
    //         this.error = 'Login failed';
    //       }
    //     },
    //     error: (error: any) => {
    //       console.debug(`Login error: ${error}`);
    //       this.error = error;
    //     },
    //   });
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
