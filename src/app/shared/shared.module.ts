import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { Comp1Component } from './comp1/comp1';
import { Comp1StompService, Comp1StompServiceFactory } from './comp1/comp1-stomp.service';

@NgModule({
    declarations: [
        Comp1Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        {
            provide: Comp1StompService,
            useFactory: Comp1StompServiceFactory,
            deps: [Http]
        }
    ]
})

export class SharedModule {
}
