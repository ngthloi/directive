import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedtextComponent } from './redtext/redtext.component';



@NgModule({
  declarations: [
    RedtextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RedtextComponent
  ]
})
export class ToolsModule { }
