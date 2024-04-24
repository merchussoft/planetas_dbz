import { Component, OnInit } from '@angular/core';
import { DefaultService } from './services/default.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueb_deploy_gh_pages';

  array_data: any = [];

  constructor(private http: DefaultService) {

  }


  ngOnInit(): void {
      this.http.mostarDatosDeafult()
      .subscribe(result => {
        console.log(result);
        this.array_data = result.items;
      })
  }
}
