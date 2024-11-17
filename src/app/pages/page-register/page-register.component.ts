import { Component } from '@angular/core';
import { SignLayoutComponent } from "../../layouts/sign-layout/sign-layout.component";
import { ionArrowBackOutline, ionPersonAddOutline } from '@ng-icons/ionicons';
import { TextWithLinesComponent } from "../../components/text-with-lines/text-with-lines.component";
import { SocialSignComponent } from "../../components/social-sign/social-sign.component";

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [SignLayoutComponent, TextWithLinesComponent, SocialSignComponent],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss'
})
export class PageRegisterComponent {
  public personAddIcon = ionPersonAddOutline;
  public arrowBackIcon = ionArrowBackOutline;
}
