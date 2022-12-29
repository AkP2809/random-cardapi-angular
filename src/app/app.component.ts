import { Component, OnInit } from '@angular/core';

//User service
import { UserService } from './services/user.service';

//Toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-cardapi';

  user : any;

  constructor(private userService : UserService,
              private toastr : ToastrService) {}

  ngOnInit(): void {
      this.userService.getUserDetails().subscribe(
        (user : any) => {
          console.log(user);
          this.user = user.results[0];
        },
        (err) => {
          this.toastr.error(err.status, "Error fetching the user details!");
        }
      );
  }

  fetchNewUser = () => {
    this.ngOnInit();
  }
}
