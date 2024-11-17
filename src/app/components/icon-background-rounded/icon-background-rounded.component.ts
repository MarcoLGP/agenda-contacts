import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-icon-background-rounded',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './icon-background-rounded.component.html',
  styleUrl: './icon-background-rounded.component.scss'
})
export class IconBackgroundRoundedComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) iconSize!: string;
  @Input({ required: true }) backgroundColor!: string;
}
