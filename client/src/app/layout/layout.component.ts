import { Component, OnInit } from '@angular/core';
import { navItems } from '../../app/_nav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  public navItems = navItems;

  constructor() { }

  ngOnInit() {
  }

}
