import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { HoverDirective } from '../hover.directive';



@NgModule({
  declarations: [
    StarDestroyerComponent,
    TieFighterComponent,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarDestroyerComponent,
    TieFighterComponent
  ]
})
export class ExternalDefensesModule { }
