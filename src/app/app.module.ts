import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { SkillsComponent } from './views/skills/skills.component';
import { MainPhotoComponent } from './components/home/main-photo/main-photo.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { ProjectsContentComponent } from './components/projects/projects-content/projects-content.component';
import { SkillsContentComponent } from './components/skills-content/skills-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    MainPhotoComponent,
    AboutMeComponent,
    ProjectsContentComponent,
    SkillsContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
