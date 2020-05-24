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
  house;
  houseName;
  logoHouse;

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
      this.houseName = (character)
      this.houseName = ((this.houseName.house))
      this.gotService.getAllHouses().subscribe( (res:any) => {
        res.forEach( elemento => {
          if( elemento.name === this.houseName){
            console.log(elemento.logoURL)
            this.logoHouse = elemento.logoURL;
          }
    })
    
      });
    })  }

}
