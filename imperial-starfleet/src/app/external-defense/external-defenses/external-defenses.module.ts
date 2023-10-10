import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieFighterComponent } from 'src/app/internal-defense/tie-fighter/tie-fighter.component';
import { StarDestroyerComponent } from 'src/app/star-destroyer/star-destroyer.component';



@NgModule({
  declarations: [TieFighterComponent, StarDestroyerComponent],
  imports: [
    CommonModule
  ]
})
export class ExternalDefensesModule { }
