import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  min(){
    var sidebar = document.querySelector(".sidebar");
    var container = document.querySelector(".container");

    sidebar?.classList.toggle("small-sidebar");
    container?.classList.toggle("large-container");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
