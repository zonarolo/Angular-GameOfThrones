import { Component, OnInit, Input } from '@angular/core';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  charactersList : Array<any> = [];
  charactersListPar : Array<any>;
  charactersListImpar : Array<any>;

  age:number;
  name:string;
  image;

  @Input() characters: Array<any>;

  constructor(private gotService: GotService) {
    
  }

  ngOnInit(): void {
    this.gotService.getAllCharacters().subscribe( (res:any) => {
      res.forEach(element => {
        let char: Array<any> = [];
        let elementAge = element.age;   

        if (elementAge != null && elementAge.age && element.image){
          char.push(element.age.age);
          char.push(element.age.name);
          char.push(element.image);
          (this.charactersList).push(char);
        }
      });
    });
    
    (this.charactersList).sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(this.charactersList);
  }
}
