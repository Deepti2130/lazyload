import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyload]'
})
export class LazyloadDirective implements OnInit{

  @Input() lazySrc!: string; // The actual image URL
  @Input() placeholderSrc: string = "https://placehold.co/300x200"; // A blank placeholder

  constructor(
    private element: ElementRef<HTMLImageElement>,
    private rendrer: Renderer2
  ) {}

  ngOnInit(): void {
    const imgElement = this.element.nativeElement;

    // Set placeholder image initially using 'src'
    this.rendrer.setAttribute(imgElement, 'src', this.placeholderSrc);

    // Ensure the image is lazy-loaded using the 'loading' attribute
    this.rendrer.setAttribute(imgElement, 'loading', 'lazy');

    // Listen for the 'load' event of the actual image to swap it with the placeholder
    imgElement.addEventListener('load', () => {
      this.rendrer.setAttribute(imgElement, 'src', this.lazySrc);
    });

    // Assign the actual image source to the 'src' attribute
    setTimeout(() => {
      this.rendrer.setAttribute(imgElement, 'src', this.lazySrc);
    }, 5000); // Delay to simulate lazy loading
  }
}





