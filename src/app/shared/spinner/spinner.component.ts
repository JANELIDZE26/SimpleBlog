import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: '<div class="sk-chase">\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '  <div class="sk-chase-dot"></div>\n' +
    '</div>',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
