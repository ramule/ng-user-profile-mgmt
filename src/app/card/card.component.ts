import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../models/IProfile';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() profile: IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
