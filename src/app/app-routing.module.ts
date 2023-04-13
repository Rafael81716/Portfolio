import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from'./views/projects/projects.component';
import { ExperienceComponent }  from './views/experience/experience.component';
import { SkillsComponent } from './views/skills/skills.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "projects",
    component: ProjectsComponent
  },{
    path: "experiences",
    component: ExperienceComponent
  }, {
    path: "skills",
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
