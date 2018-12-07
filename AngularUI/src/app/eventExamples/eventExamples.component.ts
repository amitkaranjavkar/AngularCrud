import { Component } from '@angular/core';

@Component({
    selector: `event-example`,
    templateUrl: `./eventExamples.component.html`
})

export class EventExampleComponent {
    clickedMe: string;
    values: string = '';

    onClickMe(): void {
        this.clickedMe = 'You clicked me at ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
    }

    onKey(event: any) {
        this.values += event.target.value + ' | ';
    }

    ontempKeyUp(val: any) {
        this.values += val + ' | ';
    }
}