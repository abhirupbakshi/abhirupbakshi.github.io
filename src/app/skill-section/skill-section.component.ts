import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconPath: string;
}

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent {

  readonly skills: Skill[] = [
    {
      name: 'Java',
      iconPath: 'assets/images/skills/java.svg',
    },
    {
      name: 'SQL',
      iconPath: 'assets/images/skills/sql.svg'
    },
    {
      name: 'Hibernate',
      iconPath: 'assets/images/skills/hibernate.svg'
    },
    {
      name: 'Spring',
      iconPath: 'assets/images/skills/spring.svg'
    },
    {
      name: 'Spring Boot',
      iconPath: 'assets/images/skills/spring-boot.svg'
    },
    {
      name: 'Spring Security',
      iconPath: 'assets/images/skills/spring-security.svg'
    },
    {
      name: 'Spring Data',
      iconPath: 'assets/images/skills/spring-data.svg'
    },
    {
      name: 'JavaScript',
      iconPath: 'assets/images/skills/javascript.svg'
    },
    {
      name: 'HTML',
      iconPath: 'assets/images/skills/html.svg'
    },
    {
      name: 'CSS',
      iconPath: 'assets/images/skills/css.svg'
    },
    {
      name: 'C Language',
      iconPath: 'assets/images/skills/C-Language.svg'
    },
    {
      name: 'GIT',
      iconPath: 'assets/images/skills/git.svg'
    },
    {
      name: 'Linux',
      iconPath: 'assets/images/skills/linux.svg'
    }
  ]
}
