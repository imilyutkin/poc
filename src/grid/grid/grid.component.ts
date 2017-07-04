import { Component } from '@angular/core';

import { products } from './product';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    public title = 'Grid';
    private gridData: any[] = products;

    constructor() {
    }

}

