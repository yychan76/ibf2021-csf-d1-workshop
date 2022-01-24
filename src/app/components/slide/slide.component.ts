import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() src: string | undefined;
  @Input() alt: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
