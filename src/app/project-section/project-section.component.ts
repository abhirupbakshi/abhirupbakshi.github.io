import { Component } from '@angular/core';

interface TechStack {
  name: string;
  iconPath: string;
}

interface Project {
  imagePath: string;
  name: string;
  description: string;
  techStack: TechStack[];
  sourceCodeLink: string;
  deployedLink: string;
}

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {

  projects: Project[] = [
    {
      imagePath: 'assets/images/projects/todoapp.png',
      name: 'Todo App (Ongoing)',
      description:
        'A simple todo app project for scheduling tasks (Currently ongoing)',
      techStack: [
        { name: 'Java', iconPath: 'assets/images/skills/java.svg' },
        { name: 'Hibernate', iconPath: 'assets/images/skills/hibernate.svg' },
        { name: 'SQL', iconPath: 'assets/images/skills/sql.svg' },
        { name: 'Spring Boot', iconPath: 'assets/images/skills/spring-boot.svg' },
        { name: 'Spring Security', iconPath: 'assets/images/skills/spring-security.svg' },
        { name: 'Spring Data', iconPath: 'assets/images/skills/spring-data.svg' }
      ],
      sourceCodeLink: 'https://github.com/abhirupbakshi/todo',
      deployedLink: 'https://github.com/abhirupbakshi/todo'
    },
    {
      imagePath: 'assets/images/projects/support-hub.png',
      name: 'Support Hub',
      description:
        'A simple software system for creating, maintaining and viewing complaints /'
        + 'issues faced during worktime in an organization by employees.',
      techStack: [
        { name: 'Java', iconPath: 'assets/images/skills/java.svg' },
        { name: 'Hibernate', iconPath: 'assets/images/skills/hibernate.svg' },
        { name: 'SQL', iconPath: 'assets/images/skills/sql.svg' }
      ],
      sourceCodeLink: 'https://github.com/abhirupbakshi/support-hub',
      deployedLink: 'https://drive.google.com/file/d/1mHt6nfzpeX-Sn3nRqlIGf-x1ntP-Cdb3/view'
    },
    {
      imagePath: 'assets/images/projects/starting-line.png',
      name: 'Starting Line',
      description:
        'Starting Line is a ecommerce website that focuses primarily on clothing and accessories. It is a \'https://www.finishline.com\' clone.',
      techStack: [
        { name: 'JavaScript', iconPath: 'assets/images/skills/javascript.svg' },
        { name: 'HTML', iconPath: 'assets/images/skills/html.svg' },
        { name: 'CSS', iconPath: 'assets/images/skills/css.svg' }
      ],
      sourceCodeLink: 'https://github.com/abhirupbakshi/starting-line',
      deployedLink: 'https://stirring-griffin-705e95.netlify.app/'
    },
    {
      imagePath: 'assets/images/projects/code-converter.png',
      name: 'Code Converter',
      description:
        'Code Converter is a versatile web application that allows users to convert code snippets between different programming languages.',
      techStack: [
        { name: 'JavaScript', iconPath: 'assets/images/skills/javascript.svg' },
        { name: 'NodeJs', iconPath: 'assets/images/nodejs.svg' },
        { name: 'ExpressJs', iconPath: 'assets/images/express-js.svg' },
        { name: 'HTML', iconPath: 'assets/images/skills/html.svg' },
        { name: 'CSS', iconPath: 'assets/images/skills/css.svg' }
      ],
      sourceCodeLink: 'https://github.com/abhirupbakshi/code-converter',
      deployedLink: 'https://code-converter-app-mrkishansharma.vercel.app/'
    }
  ];
}
