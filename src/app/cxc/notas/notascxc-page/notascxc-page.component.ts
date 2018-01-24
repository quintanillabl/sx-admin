import { Component, OnInit } from '@angular/core';

import { NotascxcService } from 'app/cxc/services/notascxc.service';

@Component({
  selector: 'sx-notascxc-page',
  templateUrl: './notascxc-page.component.html',
  styles:[]
})
export class NotascxcPageComponent implements OnInit {

  filteredData = [];

  constructor(
    private service: NotascxcService
  ) {}

  ngOnInit() {
    // this.service.list()
    // .subscribe( notas => this.filteredData = notas);
  }
  

  search(term) {
    
  }


}
