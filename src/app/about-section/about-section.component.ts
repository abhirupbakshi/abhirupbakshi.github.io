import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {

  @Input()
  navResumeLinkRef?: ElementRef<HTMLAnchorElement>;

  clickNavResumeLink() {
    this.navResumeLinkRef?.nativeElement.click();
  }
}
