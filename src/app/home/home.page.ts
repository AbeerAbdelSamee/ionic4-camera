import { Component } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentImage: any;
  // init camera object
  constructor(protected camera: Camera) { }
  // take pic function
  takePicture(){
    const options:CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imgData)=>{
      console.log(imgData);
      this.currentImage="data:image/jpeg;base64,"+imgData;
 
    },(err)=>{
      console.log("issues");
    })
  }
}
