import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GridComponent } from './grid/grid.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';

@NgModule({
    declarations: [
        GridComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        GridModule,
        ExcelModule
    ],
    providers: [],
    bootstrap: [GridComponent]
})
export class GridAppModule { }
