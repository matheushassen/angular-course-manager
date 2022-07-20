import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { Error404Component } from "./component/error404/error-404.component";

@NgModule ({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    exports: [
        NavBarComponent
    ],
    imports: [

        RouterModule.forChild([
            {
                path:'**', component: Error404Component
            }
        ])
    ]
})

export class CoreModule {

}