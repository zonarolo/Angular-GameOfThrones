import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GotService } from 'src/app/shared/services/got.service';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  name: string;
  character;

  constructor(private activatedRoute: ActivatedRoute, private gotService: GotService) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.name) {
        this.name = params.name;
      }
    });
  }

  ngOnInit(): void {
    this.gotService.getCharacterName(this.name).subscribe(character => {
      this.character = (character);
      console.log (character)
    })
  }

}
