import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreditoPageComponent } from './credito-page/credito-page.component';
import { SharedModule } from 'app/_shared/shared.module';
import { ClientePageComponent } from './cliente-page/cliente-page.component';
import { NotificationsComponent } from './cliente-page/notifications/notifications.component';
import { ClienteThemeComponent } from './cliente-page/theme/clienteTheme.component';
import { ClienteNavigationComponent } from './cliente-page/navigation/cliente-navigation.component';
import { ClienteToolbarComponent } from './cliente-page/toolbar/cliente-toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [CreditoPageComponent, ClientePageComponent,
    NotificationsComponent,
    ClienteThemeComponent,
    ClienteNavigationComponent,
    ClienteToolbarComponent
  ]
})
export class CarteraModule { }
