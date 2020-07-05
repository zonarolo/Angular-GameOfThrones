import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  housesList: Array<any>;

  constructor(private gotService: GotService) {}

  ngOnInit(): void {
    this.gotService.getAllHouses().subscribe((res: any) => {
      this.housesList = res;
    });
  }
}
