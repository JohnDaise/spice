import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor(private dataStorageService: DataStorageService) { }

  // ngOnInit() {
  // }

  onStoreData(){
    this.dataStorageService.storeData()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onGetData(){
    this.dataStorageService.getData();
  }

}
