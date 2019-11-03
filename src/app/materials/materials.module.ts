import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule
];
@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialsModule { }
