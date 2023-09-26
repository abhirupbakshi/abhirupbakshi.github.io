import { Component } from '@angular/core';

interface Tool {
  name: string;
  iconPath: string;
}

@Component({
  selector: 'app-tool-section',
  templateUrl: './tool-section.component.html',
  styleUrls: ['./tool-section.component.scss']
})
export class ToolSectionComponent {
  readonly tools: Tool[] = [
    {
      name: 'Intellij IDEA',
      iconPath: 'assets/images/tools/intelliJ.svg',
    },
    {
      name: 'VS Code',
      iconPath: 'assets/images/tools/vscode.svg'
    },
    {
      name: 'GitHub',
      iconPath: 'assets/images/tools/github.svg'
    },
    {
      name: 'Postman',
      iconPath: 'assets/images/tools/postman.svg'
    },
    {
      name: 'Maven',
      iconPath: 'assets/images/tools/maven.svg'
    }
  ]
}
