import { Component } from '@angular/core';
import { IconBackgroundRoundedComponent } from "../icon-background-rounded/icon-background-rounded.component";
import { ionLogoGithub, ionLogoGoogle } from '@ng-icons/ionicons';

@Component({
  selector: 'app-social-sign',
  standalone: true,
  imports: [IconBackgroundRoundedComponent],
  templateUrl: './social-sign.component.html',
  styleUrl: './social-sign.component.scss'
})
export class SocialSignComponent {
  public googleIcon = ionLogoGoogle;
  public ghIcon = ionLogoGithub;
}
