import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('wsp_container') wsp_container!: ElementRef
  @ViewChild('wsp_container_2') wsp_container_2!: ElementRef
  @ViewChild('contact_list') contact_list!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  /* whats app functions */
  showContactList() {
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__delay-3s')
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__rotateIn')
    this.renderer.addClass(this.wsp_container.nativeElement, 'animate__rotateOut')
    this.renderer.setStyle(this.wsp_container.nativeElement, 'display', 'none')

    this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'flex')
    this.renderer.removeClass(this.wsp_container_2.nativeElement, 'animate__rotateOut')
    this.renderer.addClass(this.wsp_container_2.nativeElement, 'animate__rotateIn')

    this.renderer.setStyle(this.contact_list.nativeElement, 'display', 'block')
    //this.renderer.removeClass(this.contact_list.nativeElement, 'animate__delay-1s')
    this.renderer.removeClass(this.contact_list.nativeElement, 'animate__bounceOutDown')
    this.renderer.addClass(this.contact_list.nativeElement, 'animate__bounceInUp')
  }

  closeContactList() {
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    // this.renderer.removeStyle(this.wsp_container.nativeElement, 'display')
    this.renderer.addClass(this.contact_list.nativeElement, 'animate__bounceOutDown')
    this.renderer.removeClass(this.contact_list.nativeElement, 'animate__bounceInUp')
    // this.renderer.setProperty(this.contact_list.nativeElement, '--animate-duration', '1.3s')
    // this.renderer.addClass(this.contact_list.nativeElement, 'animate__delay-1s')
    this.renderer.setStyle(this.contact_list.nativeElement, 'display', 'none')
    //this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'none')

    this.renderer.removeClass(this.wsp_container_2.nativeElement, 'animate__rotateIn')
    this.renderer.addClass(this.wsp_container_2.nativeElement, 'animate__rotateOut')
    this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'none')

    this.renderer.setStyle(this.wsp_container.nativeElement, 'display', 'flex')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__rotateOut')
    this.renderer.addClass(this.wsp_container.nativeElement, 'animate__rotateIn')


  }

}
