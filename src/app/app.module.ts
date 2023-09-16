import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { GitSectionComponent } from './git-section/git-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavlinksComponent,
    HomeSectionComponent,
    SkillSectionComponent,
    ProjectSectionComponent,
    ContactSectionComponent,
    AboutSectionComponent,
    GitSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
