import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-git-section',
  templateUrl: './git-section.component.html',
  styleUrls: ['./git-section.component.scss']
})
export class GitSectionComponent implements OnChanges {

  readonly username: string = 'abhirupbakshi';

  @Input()
  sectionMinHeight?: number;

  @ViewChild('gitStatContainer')
  gitStatContainer!: ElementRef<HTMLDivElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.gitStatContainer && this.sectionMinHeight)
      this.gitStatContainer.nativeElement.style.height = this.sectionMinHeight + 'px';
  }
}
