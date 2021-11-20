import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {API} from './constants';


@Injectable({
  providedIn: 'root'
})
export class ExtNotesLinkService {

  constructor(private http: HttpClient) {

  }

  getShipmentData(data) {
    return this.http.get(API.getExtShipmentData + '?clientId=' + data.clientId + '&facilityId=' + data.facilityId + '&shipmentId=' + data.shipmentId);
  }

  insertLogEvent(data){
    return this.http.post(API.LGE , data);
  }
}
