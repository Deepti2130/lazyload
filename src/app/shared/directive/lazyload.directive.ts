import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyload]'
})
export class LazyloadDirective implements OnInit{

  @Input() lazySrc!: string; // The actual image URL
  @Input() placeholderSrc: string = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='; // A blank 1x1 pixel gif

  constructor(
    private element: ElementRef<HTMLImageElement>,
    private rendrer: Renderer2) {}

  ngOnInit(): void {
    const imgElement = this.element.nativeElement;

    // Set placeholder image initially
    this.rendrer.setAttribute(imgElement, 'src', this.placeholderSrc);

// Create IntersectionObserver to load image when in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.rendrer.setAttribute(imgElement, 'src', this.lazySrc);
      observer.unobserve(imgElement); // Stop observing once the image is loaded
    }
  });
});

observer.observe(imgElement); // Start observing the image element
}


  }


