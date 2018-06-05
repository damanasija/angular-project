import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output('featureSelected') featureSelected = new EventEmitter<string>();

  onSelect(shownComponent: string){
    this.featureSelected.emit(shownComponent);
  }
}