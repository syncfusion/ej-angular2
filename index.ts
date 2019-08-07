import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";



import { EJTemplateDirective } from './ej/template';

export * from './ej/core';
export { EJTemplateDirective } from './ej/template';


let EJ_COMPONENTS = [EJTemplateDirective, ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EJ_COMPONENTS
  ],
  exports: [
    EJ_COMPONENTS
  ]
})
export class EJAngular2Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EJAngular2Module
    };
  }
}


