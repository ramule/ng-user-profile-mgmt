import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProfileComponent } from '../add-profile/add-profile.component';

@Injectable({
  providedIn: 'root'
})

export class ConfirmGuard implements CanDeactivate<any>{

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.Dirty == true) {
      let result = confirm("Are you sure you want to leave the page?");
      return result;
    }
    else {
      return true;
    }
  }
}
