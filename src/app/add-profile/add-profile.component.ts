import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
})
export class AddProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {
    this.profileForm = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      sex: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      photo: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  public get Name(): AbstractControl {
    return this.profileForm.get('name');
  }

  public get Dirty(): boolean {
    return this.profileForm.dirty;
  }


  public get Email(): AbstractControl {
    return this.profileForm.controls['email'];
  }

  public get Sex(): AbstractControl {
    return this.profileForm.controls['sex'];
  }

  public get BirthDate(): AbstractControl {
    return this.profileForm.controls['birthdate'];
  }

  public get Phone(): AbstractControl {
    return this.profileForm.controls['phonenumber'];
  }

  public get Address(): AbstractControl {
    return this.profileForm.controls['address'];
  }

  public get City(): AbstractControl {
    return this.profileForm.controls['city'];
  }

  public get Country(): AbstractControl {
    return this.profileForm.controls['country'];
  }

  public get Photo(): AbstractControl {
    return this.profileForm.controls['photo'];
  }

  onCancel() {
    this.profileForm.reset();
    this.router.navigateByUrl('/');
  }

  onSubmit(formdata) {
    this.profileService.addProfile(formdata).subscribe(
    (data) =>{
      this.router.navigateByUrl('/home');
    },
    (err) => {
      console.log("Error", err)
    });
  }
}
