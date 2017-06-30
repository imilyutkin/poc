import { Component } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'Hello World!';
    public source: Country[] = [{Id: 1, Name: 'One'}, {Id: 2, Name: 'Two'}, {Id: 3, Name: 'Three'}];
    public info: Country[];
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.info = this.source.slice();
        this.myForm = this._fb.group({
            Name: ['', [Validators.required, Validators.minLength(5)]],
            LastName: ['', [Validators.required, Validators.minLength(5)]],
            Country: [{}, [Validators.required]]
        });
    }

    public selectionChange(value: Country): void {
      console.log(value);
    }

    public filterChange(filter: any): void {
        this.info = this.source.filter((s) => s.Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

    save(model: FormGroup) {
        // call API to save customerS
        console.log(model.value);
    }
}
interface Person {
    Name: string;
    LastName: string;
    Country: string;
}
interface Country {
    Id: number;
    Name: string;
}
