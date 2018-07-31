import { NgModule } from '@angular/core';
import { ToUpperPipe } from './to-upper/to-upper';
@NgModule({
	declarations: [ToUpperPipe],
	imports: [],
	exports: [ToUpperPipe]
})
export class PipesModule {}
