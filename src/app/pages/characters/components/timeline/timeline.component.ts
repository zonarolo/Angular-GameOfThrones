import { Component, OnInit, Input } from '@angular/core';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  charactersList : Array<any>;
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
      // console.log(res);
      res.forEach(element => {
        // console.log(element.name);
        // console.log(element.age);
        if (element.age != null && element.age != undefined){
          this.charactersList.push(element.age);
          // console.log(element.age);
        }
      });
      console.log(this.charactersList);
    })
  }

}
