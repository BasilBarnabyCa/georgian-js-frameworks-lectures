import { Component } from '@angular/core';

// Define a class to represent a project
export class Project {
  id!: number;
  name!: string;
  course!: string;
}

// Define a list of projects
const PROJECTS: Project[] = [
  { id: 1, name: 'Project 1', course: 'Angular' },
  { id: 2, name: 'Project 2', course: 'React' },
  { id: 3, name: 'Project 3', course: 'Vue' },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // Define a property to hold the list of projects to make it available to the template
  projects = PROJECTS;
  selectedProject!: Project;
  onSelect(project: Project) {
	this.selectedProject = project;
  };
}
