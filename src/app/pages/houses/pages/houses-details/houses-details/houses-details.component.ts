import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GotService } from 'src/app/shared/services/got.service';

@Component({
  selector: 'app-houses-details',
  templateUrl: './houses-details.component.html',
  styleUrls: ['./houses-details.component.scss']
})
export class HousesDetailsComponent implements OnInit {

  name: string;
  house: any ;

  constructor(private activatedRoute: ActivatedRoute, private gotService: GotService) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.name) {
        this.name = params.name;
      }
    });
  }

  ngOnInit(): void {
    this.gotService.getHouseName(this.name).subscribe( house => {
      this.house = (house[0]);
      console.log (this.house)
    })
  }

}