import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBColor: string = 'transparent';
  //@Input() highlightBColor: string = 'blue';
  @Input('appBetterHighlight') highlightBColor: string = 'blue';
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string ;
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef:ElementRef,  private renderer: Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultBColor;
    this.color = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    this.backgroundColor = this.highlightBColor;
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','black');
    this.backgroundColor = this.defaultBColor;
    this.color = this.defaultColor;
  }
}
