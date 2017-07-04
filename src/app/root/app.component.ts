import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public source: Country[] = [{Id: 1, Name: 'One'}, {Id: 2, Name: 'Two'}, {Id: 3, Name: 'Three'}];
    public info: Country[];
    public gcForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.info = this.source.slice();
        this.gcForm = this._fb.group({
            Created: ['', [Validators.required]],
            Reporter: ['ITRANSITION\\i.milyutkin', [Validators.required]],
            ReporterContacts: ['', []],
            ReporterDepartment: ['', [Validators.required]],
            ReporterCompany: ['', []],
            Object: ['', [Validators.required]],
            Location: ['', []],
            InvolvedCompany: ['', [Validators.required]],
            IsPeopleDo: [false, []],
            IsToolsEquip: [false, []],
            IsPeopleRest: [false, []],
            IsEnvironment: [false, []],
            Description: ['', [Validators.required]],
            Actions: ['', []],
            Behaviour: ['', []],
            NeedAdditionalAction: [false]
        }, { validator: this.validateGreenCardForm });
    }

    public filterChange(filter: any): void {
        this.info = this.source.filter((s) => s.Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

    save(model: FormGroup) {
        console.log(model.value);
    }

    validateGreenCardForm(form: FormGroup): any {
        if (form.controls.IsPeopleDo.value) {
            if (!form.controls.Behaviour.value) {
                return {
                    validateBehaviour: {
                        valid: false
                    }
                };
            }
        }
        if (form.controls.NeedAdditionalAction.value) {
            if (!form.controls.Actions.value) {
                return {
                    validateActions: {
                        valid: false
                    }
                };
            }
        }
        return null;
    }
}
interface Country {
    Id: number;
    Name: string;
}
