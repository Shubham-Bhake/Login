import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

 
  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}
  
  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
         
          if (this.login.getUserRole() == 'Competency Member') {
           
            this.router.navigate(['Onboard']);
            this.login.loginStatusSubject.next(true);

          }  else if (this.login.getUserRole() == 'Training Lead') {
           
            this.router.navigate(['Onboard']);
            this.login.loginStatusSubject.next(true);
          }
         else if (this.login.getUserRole() =='Delivery Team/Client') {
            
            this.router.navigate(['user-dashboard']);
            this.login.loginStatusSubject.next(true);
            
          } else if(this.login.getUserRole()=='Not Allowed To Acess Appiliction'){
            this.router.navigate(['']);
            this.snack.open('You Are Not Allowed To Acess !! ', '', {
              duration: 3000,
            });
            
          }
          else{
            this.login.logout();

          }
        });
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
}
