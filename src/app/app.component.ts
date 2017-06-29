import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';
    source: string[] = ['One', 'Two', 'Three'];
    info: string[];
    public events: string[] = [];
    public IsImportant = false;
    public Test: string;
    public LastName: string;
    public Name: string;


    constructor() {
      this.info = this.source.slice();
    }

    onSaveClick() {
        this.title = 'Save';
        console.log(this.Name);
        console.log(this.LastName);
        console.log(this.Test);
        console.log(this.IsImportant);
    }

    onCancelClick() {
        this.title = 'Cancel';
    }

    public selectionChange(value: any): void {
      console.log(value);
    }

    public filterChange(filter: any): void {
        this.info = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}
