import { Component, OnInit, Input } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-cliente-navigation',
  templateUrl: 'cliente-navigation.component.html'
})
export class ClienteNavigationComponent implements OnInit {

  @Input() miniNav: boolean = false;

  @Input() media: TdMediaService;

  constructor() { }

  ngOnInit() { }
}