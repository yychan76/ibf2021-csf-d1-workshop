import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Angular Project';
  visible: boolean = false;

  toggleSlidesView() {
    this.visible = !this.visible;
  }
}
