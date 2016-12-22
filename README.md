## Angular 2 Syncfusion JavaScipt Components

Essential JavaScript provides support for Angular 2 Framework through wrappers. Each Syncfusion widgets are created as Angular 2 components with built in support for data binding and child directives to make complex property definition easier.

## Installation

To install this library, run:

```bash
$ npm install ej-angular2 --save
```

## Consuming the library

We can import the library in any Angular application by running:

```bash
$ npm install ej-angular2
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library module
import { EJAngular2Module } from 'ej-angular2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule, EJAngular2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Documentation

For complete documentation for getting started with Angular 2 Syncfusion Components, please visit 
[https://help.syncfusion.com/angular-2/](https://help.syncfusion.com/angular-2/)

## Demos

Find live demos for the Angular 2 Syncfusion Components [here.](http://ng2jq.syncfusion.com/)

## Support

In case of any questions regarding the use of Syncfusion JavaScript Angular 2 components, please [contact us](http://www.syncfusion.com/support/#) by creating a support ticket.

## License Information

For licensing information about Syncfusion JavaScript Angular 2 components, Download the Syncfusion License Agreements from [here](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf).