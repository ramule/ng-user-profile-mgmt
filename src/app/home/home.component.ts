import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles: any = [];
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(
    (data) =>{
      this.profiles = data;
    },
    (err)=>{
      console.log("Error: ", err);
    });
    console.log(this.profiles);
  }

}
