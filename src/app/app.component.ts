import { GetTemService } from './get-tem.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private getTemService: GetTemService) {}
  tempeature: any;
  onTerm(term: string) {

    this.getTemService.getTemp(term).subscribe((res: any) => {
      this.tempeature = res.main.temp;
    })
  }
}
