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
    clickable: true,
    timeout: 60 * 60 * 1000, // One hour in ms
    // maxFiles: this.dropzoneMaxFiles,
    // maxFilesize: this.dropzoneMaxFileSize,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    autoProcessQueue: true, // process queue as soon as files are accepted
    addRemoveLinks: false, // requests not implemented to handle this in example
    renameFile: (file: File) => {
      // Concats the identifier for the attachment along
      // with the file type
      // files should be filtered by acceptedFiles above
      // to only accept image or video types (no file type without a literal extension e.g. ".png")
      let extension = file.name.split('.').pop(); // get the extension
      let fileId = crypto.randomUUID();
      return `${fileId}.${extension}`;
    },

    // The following are (mostly) applied to Azure Blob Storage
    method: 'put',
    headers: {
      'x-ms-blob-type': 'BlockBlob',
    },
    parallelUploads: 1, // only upload a single file at a time since URL is dynamically changing per-file
    uploadMultiple: false,
    // For some reason we must put this function here on Angular Dropzone Wrapper version 11
    // accept: (file: any, done: Function) => {
    //   this.dropzoneAccept(file, done);
    // },
  };
}
