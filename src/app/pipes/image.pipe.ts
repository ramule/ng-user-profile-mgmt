import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(photoUrl: string, sex: string): unknown {
    if(photoUrl) return photoUrl
    else
    if(sex == 'M') return '/assets/male.png'
    else return '/assets/female.jpg'
  }

}
