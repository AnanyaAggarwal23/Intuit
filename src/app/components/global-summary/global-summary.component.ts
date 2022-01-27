import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GlobalSummary } from '../../models/global.model';
@Component({
  selector: 'app-global-summary',
  templateUrl: './global-summary.component.html',
  styleUrls: ['./global-summary.component.scss'],
})
export class GlobalSummaryComponent {
  @Input() globalSummary: GlobalSummary;
  constructor() {}
}
