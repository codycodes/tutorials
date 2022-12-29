import { Component, VERSION } from '@angular/core';
import {
  DropzoneComponent,
  DropzoneConfigInterface,
  DropzoneDirective,
} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
  };
}
