import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  constructor() { }
  @Output () submitted = new EventEmitter<string>();
  term = '';


  ngOnInit(): void {
  }
  onsubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
