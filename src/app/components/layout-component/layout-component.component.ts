import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.scss'],
})
export class LayoutComponentComponent implements OnInit {
  isExpanded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}
}
