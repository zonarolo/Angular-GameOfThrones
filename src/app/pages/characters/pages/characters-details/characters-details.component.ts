import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent implements OnInit {
  name: string;
  character;
  house;
  houseName;
  logoHouse;
  image;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gotService: GotService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.name) {
        this.name = params.name;
      }
    });
  }

  ngOnInit(): void {
    this.gotService.getCharacterName(this.name).subscribe((character) => {
      this.character = character;
      this.houseName = character;
      this.houseName = this.houseName.house;

      this.gotService.getAllHouses().subscribe((res: any) => {
        res.forEach((elemento) => {
          if (elemento.name === this.houseName) {
            this.logoHouse = elemento.logoURL;
          } else if (
            this.character.house == 'House Baratheon of King&apos;s Landing'
          ) {
            this.logoHouse =
              'https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/House-Baratheon-of-King%27s_Landing-Main-Shield.PNG';
          } else if (this.character.house == 'House Cassel') {
            this.logoHouse =
              'https://awoiaf.westeros.org/images/c/c3/House_Cassel.PNG';
          } else if (this.character.house == 'Faith of the Seven') {
            this.logoHouse = '../../../assets/img/House-Faith-Militant.png';
          } else if (this.character.name == 'Oberyn Martell') {
            this.character.image = '../../../assets/img/Oberyn.jpg';
          } else if (this.character.name == 'Grenn') {
            this.character.image =
              'https://static.wikia.nocookie.net/daef9c6c-cd8b-4015-b211-6e1e26d00fd3';
          } else if (
            this.character.house == 'Good Masters' ||
            this.character.house == 'Wise Masters'
          ) {
            this.logoHouse =
              'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5e/SlaveMasters-Shield.PNG/revision/latest?cb=20160903142151';
          } else if (
            this.character.house == 'Second Sons' ||
            this.character.house == 'Second Sons (mercenary company)'
          ) {
            this.logoHouse =
              'https://vignette.wikia.nocookie.net/gameofthrones/images/9/9e/Second-Sons-Shield.PNG/revision/latest?cb=20170606020329';
          }
        });
      });
    });
  }

  back() {
    window.history.go(-1);
  }
}
