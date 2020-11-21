import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile } from '../models/IProfile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profile: IProfile;
  @ViewChild('editProfileForm') form: FormGroup;
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    /* loading data using observables */
    // this.profileService.getProfileById(id).subscribe(
    //   (data) => {
    //     this.profile= data;
    //   },
    //   (err) => {
    //     console.log("Error", err);
    //   }
    // );

    /* Using resolver */

    this.profile = this.route.snapshot.data["profile"];
  }

  public get Dirty(): boolean {
    return this.form.dirty;
  }

  onUpdate(formdata) {
    if(formdata.valid) {
      this.profileService.updateProfile(this.profile).subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl('/');
        },
        (err) => {
          console.log("Error", err);
        }
      )
    }
    else{
      alert('invalid data')
    }
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

}
