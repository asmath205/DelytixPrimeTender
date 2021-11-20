import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ExtNotesLinkService} from '../../services/ext-notes-link.service'
import * as momentTz from 'moment-timezone';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment-timezone';
import {now} from 'moment-timezone';

export interface PeriodicElement {
  stop: number;
  name: string;
  city: string;
  state: string;

}


@Component({
  selector: 'app-ext-notes-link',
  templateUrl: './ext-notes-link.component.html',
  styleUrls: ['./ext-notes-link.component.scss']
})

export class ExtNotesLinkComponent implements OnInit {

  clientId;
  facilityid;
  shipmentId;
  shipmentDetails: any;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['stop', 'name', 'city', 'state'];

  noteFacilityId;
  noteShipmentId;
  noteStopNumb;
  noteStopId;
  noteUserId;
  noteRole;
  stopArr: any;
  facilityIds: any;
  notePhoneNumb = '';


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private extNotesService: ExtNotesLinkService,
  ) {}


  ngOnInit(): void {
    this.getUrlParams();
    this.getShipmentData();
  }

  getUrlParams() {
    this.clientId = this.route.snapshot.queryParamMap.get('clientId');
    this.facilityid = this.route.snapshot.queryParamMap.get('facilityId');
    this.shipmentId = this.route.snapshot.queryParamMap.get('shipmentId');
  }


  getShipmentData() {
    const data = {
      clientId: this.clientId,
      facilityId: this.facilityid,
      shipmentId: this.shipmentId
    };
    this.extNotesService.getShipmentData(data).subscribe((res: any) => {
        this.shipmentDetails = res.data[0];
        this.dataSource.data = res.data;
      });
  }

  closePage() {
    window.close();
  }

  sendResponse(EVD: string, EVQ: number) {
    const row = this.shipmentDetails;
    const LogEventList = [];
    const logEvent = {
      CID: this.clientId,
      CNE: row.clientName,
      IME: null,
      GUI: 0,
      UID: row.deliveryDr,
      EVT: 5100,
      ETM: moment(now()).format('YYYY-MM-DD hh:mm:ss'),
      SHD: row.shipmentId,
      SLS: row.salesId,
      BCD: '0' ,
      SID: row.stopId,
      STD: row.stopName,
      EVQ,
      EVD,
      FID: row.facilityId,
      LAT: '0',
      LNG: '0',
      TMZ: 'America/New_York',
      STN: row.stopNumb
    };
    LogEventList.push({LGE : logEvent});
    const data = {
      LEL : LogEventList
    };

    this.extNotesService.insertLogEvent(data).subscribe((res: any) => {
      setTimeout(() => {
        this.closePage();
      }, 3000 );
    });
  }

}





