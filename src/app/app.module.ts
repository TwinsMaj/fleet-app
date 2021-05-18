import { AppErrorHandler } from './common/app-error-handler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HttpClientModule } from '@angular/common/http';
import { StaticGpsService } from './services/static-gps.service';
import { ErrorHandler } from '@angular/core';
@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		ResultsComponent,
		SearchComponent,
		SummaryComponent,
		DatepickerComponent,
	],
	imports: [BrowserModule, NgbModule, FormsModule, FontAwesomeModule, ReactiveFormsModule, HttpClientModule],
	providers: [StaticGpsService, { provide: ErrorHandler, useClass: AppErrorHandler }],
	bootstrap: [AppComponent],
})
export class AppModule {}
