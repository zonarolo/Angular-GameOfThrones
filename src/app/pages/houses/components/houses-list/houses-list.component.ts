import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss'],
})
export class HousesListComponent implements OnInit {
  @Input() houses: Array<any>;

  constructor() {}

  ngOnInit(): void {}
}
