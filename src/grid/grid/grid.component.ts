import { Component } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { products } from './product';
import { aggregateBy } from '@progress/kendo-data-query';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    public multiple = false;
    public allowUnsort = true;

    private sort: SortDescriptor[] = [];
    private gridView: GridDataResult;
    private products: any[] = products;

    constructor() {
        this.loadProducts();
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }

}

