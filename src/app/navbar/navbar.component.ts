import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SvgLoaderService } from '../svg-loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @ViewChild('LogoFigure') LogoFigure: ElementRef;

  constructor(private svgLoader: SvgLoaderService) {

    svgLoader.getSvg('/assets/images/Chess_qlt45.svg').subscribe(
      (data) => {
        this.LogoFigure.nativeElement.innerHTML = data;
      }
    );
  }

  ngOnInit(): void {
  }
}
