import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectedPage = new EventEmitter<string>();
  
  onClick(page: string){
    this.selectedPage.emit(page);
  }
  // constructor() { }

  // ngOnInit() {
  // }

}
