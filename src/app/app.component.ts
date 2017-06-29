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

    constructor() {
      this.info = this.source.slice();
    }

    onSaveClick() {
        this.title = 'Save';
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
