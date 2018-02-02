import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdMediaService, TdLayoutManageListComponent,  } from '@covalent/core';
import { TdRotateAnimation } from '@covalent/core/common/animations/rotate/rotate.animation';

@Component({
  selector: 'sx-cliente-page',
  templateUrl: './cliente-page.component.html',
  styles: [],
  animations: [
    TdRotateAnimation(),
  ],
})
export class ClientePageComponent implements OnInit {

  cliente: any;
  
  miniNav: boolean = false;

  @ViewChild('manageList') manageList: TdLayoutManageListComponent;

  constructor(
    private route: ActivatedRoute,
    public media: TdMediaService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cliente = this.route.snapshot.data;
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
    setTimeout(() => {
      //this.manageList.sidenav._animationStarted.emit()
    });
  }

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
