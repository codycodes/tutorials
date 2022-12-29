import { Component, Input } from '@angular/core';

import {
  DropzoneComponent,
  DropzoneConfigInterface,
  DropzoneDirective,
} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'hello',
  template: `<dropzone [config]="config" [message]="'Click or drag images here to upload'"></dropzone>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
  };
}
