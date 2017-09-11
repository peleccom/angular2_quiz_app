import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {OverlayContainer} from '@angular/material';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.styl']
})
export class BasicLayoutComponent implements OnInit {
  dark = false;
  navItems = [
    {name: 'Autocomplete', route: '/autocomplete'},
    {name: 'Button', route: '/button'},
    {name: 'Button Toggle', route: '/button-toggle'},
    {name: 'Card', route: '/card'},
    {name: 'Chips', route: '/chips'},
    {name: 'Checkbox', route: '/checkbox'},
    {name: 'Datepicker', route: '/datepicker'},
    {name: 'Dialog', route: '/dialog'},
    {name: 'Expansion Panel', route: '/expansion'},
    {name: 'Gestures', route: '/gestures'},
    {name: 'Grid List', route: '/grid-list'},
    {name: 'Icon', route: '/icon'},
    {name: 'Input', route: '/input'},
    {name: 'List', route: '/list'},
    {name: 'Menu', route: '/menu'},
    {name: 'Live Announcer', route: '/live-announcer'},
    {name: 'Overlay', route: '/overlay'},
    {name: 'Portal', route: '/portal'},
    {name: 'Progress Bar', route: '/progress-bar'},
    {name: 'Progress Spinner', route: '/progress-spinner'},
    {name: 'Radio', route: '/radio'},
    {name: 'Ripple', route: '/ripple'},
    {name: 'Select', route: '/select'},
    {name: 'Sidenav', route: '/sidenav'},
    {name: 'Slider', route: '/slider'},
    {name: 'Slide Toggle', route: '/slide-toggle'},
    {name: 'Snack Bar', route: '/snack-bar'},
    {name: 'Stepper', route: '/stepper'},
    {name: 'Table', route: '/table'},
    {name: 'Tabs', route: '/tabs'},
    {name: 'Toolbar', route: '/toolbar'},
    {name: 'Tooltip', route: '/tooltip'},
    {name: 'Platform', route: '/platform'},
    {name: 'Style', route: '/style'},
    {name: 'Typography', route: '/typography'}
  ];
  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer) {}
  ngOnInit() {
  }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._renderer.addClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = darkThemeClass;
    } else {
      this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
      this._overlayContainer.themeClass = '';
    }
  }



}
