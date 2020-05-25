import { Component, OnInit, Input } from '@angular/core';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  charactersList;
  num: number = 16;
  controller: boolean = true;

  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getAllCharacters().subscribe((res: any) => {
      let char: Array<any> = [];

      res.forEach((element) => {
        let elementAge = element.age;

        if (elementAge != null && elementAge.age && element.image)
          char.push(element);

        char.sort(function (a, b) {
          if (a.age.age > b.age.age) return 1;
          if (a.age.age < b.age.age) return -1;
          return 0;
        });

        this.charactersList = char;
      });
    });
  }
  order() {
    this.controller = !this.controller;

    if (this.controller) {
      this.charactersList.sort((a, b) => {
        if (a.age.age > b.age.age) return 1;
        if (a.age.age < b.age.age) return -1;
        return 0;
      });
    } else {
      this.charactersList.sort((a, b) => {
        if (a.age.age < b.age.age) return 1;
        if (a.age.age > b.age.age) return -1;
        return 0;
      });
    }

    this.controller
      ? (this.num = this.charactersList[0].age.age)
      : (this.num = this.charactersList[1].age.age);
  }
}
