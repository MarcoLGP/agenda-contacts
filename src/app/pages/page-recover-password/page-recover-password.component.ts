import { Component } from '@angular/core';
import { SignLayoutComponent } from "@layouts/sign-layout/sign-layout.component";
import { ionKeyOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-page-recover-password',
  standalone: true,
  imports: [SignLayoutComponent],
  templateUrl: './page-recover-password.component.html',
  styleUrl: './page-recover-password.component.scss'
})
export class PageRecoverPasswordComponent {
  public keyIcon = ionKeyOutline;
}
