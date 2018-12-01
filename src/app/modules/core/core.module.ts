import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JsonApiService } from './services/json-api.service';
import { PostService } from './services/post.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        JsonApiService,
        PostService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        
    }
}