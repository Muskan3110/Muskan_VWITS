import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-app';

  data$: Observable<any>; //fetching data from API using observable
  
  constructor(private http: HttpClient){
    this.data$=this.http.get('https://dummyjson.com/users') 
  }
}
