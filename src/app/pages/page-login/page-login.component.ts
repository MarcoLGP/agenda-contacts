import { Component } from '@angular/core';
import { SignLayoutComponent } from '@layouts/sign-layout/sign-layout.component';
import { ionPersonOutline } from '@ng-icons/ionicons';
import { TextWithLinesComponent } from '@components/text-with-lines/text-with-lines.component';
import { SocialSignComponent } from "@components/social-sign/social-sign.component";

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [SignLayoutComponent, TextWithLinesComponent, SocialSignComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {
  public userIcon = ionPersonOutline;
}
