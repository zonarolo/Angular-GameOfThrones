import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  charactersList: Array<any>;

  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getAllCharacters().subscribe((res: any) => {
      this.charactersList = res;
    });
  }
}
