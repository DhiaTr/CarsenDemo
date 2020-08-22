import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ngx-app',
    template: '<nav-bar></nav-bar><router-outlet></router-outlet>',
})
export class MainComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
