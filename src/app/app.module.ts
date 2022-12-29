import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';

import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [BrowserModule, FormsModule, DropzoneModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
