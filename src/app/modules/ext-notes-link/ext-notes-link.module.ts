import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtNotesLinkComponent} from '../../components/ext-notes-link/ext-notes-link.component';
import {ExtNotesLinkRoutingModule} from './ext-notes-link.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from "ngx-toastr";
import {MatModulesModule} from '../mat-modules/mat-modules.module';
// import {MatNativeDateModule} from '@angular/material/pa';


@NgModule({
  declarations: [
    ExtNotesLinkComponent
  ],
  imports: [
    CommonModule,
    ExtNotesLinkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatModulesModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      progressBar: true,
      maxOpened: 1,
      autoDismiss: true,
      closeButton: true ,
    }),
  ]
})
export class ExtNotesLinkModule { }
