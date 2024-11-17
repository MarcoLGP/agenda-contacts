import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-icon-bordered',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './icon-bordered.component.html',
  styleUrl: './icon-bordered.component.scss'
})
export class IconBorderedComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) iconSize!: string;
}
