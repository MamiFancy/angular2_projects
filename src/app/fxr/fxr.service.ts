import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class FxrService {

  content:any;

  constructor(private http: Http){

  }

  getContent() {
    console.log('getConent....');
    return this.http.get('/app/content/fxr.json').map(res => res.json());
  }
}
