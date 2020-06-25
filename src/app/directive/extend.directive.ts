import {Directive, ElementRef, HostListener,Input,Renderer2,OnInit} from '@angular/core';


@Directive({
  selector: '[appExtend]'
})
export class ExtendDirective implements OnInit {
    @Input() execute:any;

    constructor(
        private el:ElementRef,
        private renderer:Renderer2
    ) { }

    ngOnInit(){
        if(this.execute !== undefined){
            Object
            .keys(this.execute)
            .forEach((x,i)=>{
                this.renderer.setAttribute(
                    this.el.nativeElement,
                    x,
                    this.execute[x.valueOf()]
                )
            })
        }
    }
}
