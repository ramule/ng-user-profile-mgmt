import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProfile } from '../models/IProfile';
import {PROFILES} from './../../JSON_files/profiledata';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // profiles: any[] = PROFILES.profiles;
  readonly apiBaseUrl = "http://localhost:3000/profiles";
  constructor(
    private http: HttpClient
  ) { }

  getProfiles(): Observable<any[]> {
    // return of(this.profiles);
    // let options = {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   }
    // }
    return this.http.get<IProfile[]>(this.apiBaseUrl);
  }

  getProfileById(id: number): Observable<IProfile> {
    // return of(this.profiles.find(x => x.id == id));
    let url = this.apiBaseUrl + "/" + id;
    // let options = {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   }
    // }
    return this.http.get<IProfile>(url);
  }

  addProfile(profile: IProfile): Observable<IProfile> {
    // this.profiles.push(profile);
    // return of(profile);
    // let options = {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   }
    // }
    return this.http.post<IProfile>(this.apiBaseUrl, profile);
  }

  updateProfile(profile: IProfile) {
    let url = `${this.apiBaseUrl}/${profile.id}`;
    // let options = {
    //   headers: {
    //     "Content-Type":"application/json",
    //     "Accept": "application/json"
    //   }
    // }
    return this.http.put<IProfile>(url, profile);
  }
}
