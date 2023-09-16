import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.scss']
})
export class NavlinksComponent {

  @Input()
  usedInSidenav: boolean = false;

  @ViewChildren('sectionLink', { read: ElementRef })
  sectionLinkRefs!: QueryList<ElementRef<HTMLAnchorElement>>;

  @ViewChild('resumeLink', { read: ElementRef })
  resumeLinkRef!: ElementRef<HTMLAnchorElement>;

  @ViewChild('contactLink', { read: ElementRef })
  contactLinkRef!: ElementRef<HTMLAnchorElement>;
}
