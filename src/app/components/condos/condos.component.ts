import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-condos',
  templateUrl: './condos.component.html',
  styleUrls: ['./condos.component.css']
})
export class CondosComponent implements OnInit {
  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  showMenu() {
    console.log("show menú");
    this.renderer.removeStyle(this.navbar_menu.nativeElement, 'transform')
    this.renderer.setStyle(this.navbar_menu.nativeElement, 'transform', 'translateX(0%)')
    this.renderer.addClass(this.icon_nav_2.nativeElement, 'animate__bounceOut')
    this.renderer.removeClass(this.div_close.nativeElement, 'animate__zoomOut');
    this.renderer.addClass(this.div_close.nativeElement, 'animate__zoomIn');

  }

  closeMenu() {
    this.renderer.removeStyle(this.navbar_menu.nativeElement, 'transform')
    this.renderer.setStyle(this.navbar_menu.nativeElement, 'transform', 'translateX(-100%)')
    this.renderer.removeClass(this.icon_nav_2.nativeElement, 'animate__bounceOut')
    this.renderer.addClass(this.icon_nav_2.nativeElement, 'animate__bounceIn')
    this.renderer.removeClass(this.div_close.nativeElement, 'animate__zoomIn');
    this.renderer.addClass(this.div_close.nativeElement, 'animate__zoomOut');
  }

}
