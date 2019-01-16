import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  // ngOnInit() {
  // }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

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


  onLogout(){
    this.authService.logout();
  }

}
