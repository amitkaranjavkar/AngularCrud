import { Component, Input } from '@angular/core';

@Component({
    selector: 'div-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
    @Input() isLoadingDisplayed: boolean = false;
}