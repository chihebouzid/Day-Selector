import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.scss']
})
export class DaySelectorComponent implements OnInit {

  constructor() {}

  weekDay : WeekDays[] = [
    { name : "Mo" , id: 1},
    { name : "Tu" , id: 2},
    { name : "Wed" , id: 3},
    { name : "Thu" , id: 4},
    { name : "Fri" , id: 5},
    { name : "Sat" , id: 6},
    { name : "Sun" , id: 0},
  ]
  today: any = new Date().getDay()

  ngOnInit(): void {
    console.log(this.today);
  }

}

export interface WeekDays {
  name: string,
  id: number
}
