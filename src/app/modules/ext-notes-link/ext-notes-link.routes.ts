import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtNotesLinkComponent } from '../../components/ext-notes-link/ext-notes-link.component';

const routes: Routes = [
  { path: '', component: ExtNotesLinkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtNotesLinkRoutingModule { }
