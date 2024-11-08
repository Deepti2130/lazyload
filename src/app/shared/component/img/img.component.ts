import { Component, OnInit } from '@angular/core';
import { Iimg } from '../../model/img';
import { imgArr } from '../../const/img';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

 imgData :Array<Iimg> = imgArr
  constructor() { }

  ngOnInit(): void {
  }

}
