import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProfile } from '../models/IProfile';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileResolver implements Resolve<IProfile>{

  constructor(
    private profileService: ProfileService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProfile | Observable<IProfile> | Promise<IProfile> {
    let id = route.params["id"];
    return this.profileService.getProfileById(id);
  }
}
