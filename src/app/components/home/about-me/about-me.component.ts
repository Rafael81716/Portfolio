import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  date: Date = new Date(2003, 12, 29);
  currentYear: number = new Date().getFullYear();
  age: number = this.currentYear - this.date.getFullYear();
}
