import { Component, OnInit } from '@angular/core';
import { gallery } from '../../static/gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos = gallery.photos;

  constructor() { }

  ngOnInit(): void {
  }


}
