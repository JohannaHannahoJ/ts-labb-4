import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  courseService = inject(CourseService);

  ngOnInit() {
    this.courseService.loadCourses();
  }
}
