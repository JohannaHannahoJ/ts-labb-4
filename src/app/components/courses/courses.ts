import { Component, computed, inject, signal } from '@angular/core';
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
  // signal som lagrar vilket av de tre fälten som ska sorteras
  sortField = signal<"code" | "coursename" | "progression">("progression");
  // signal som lagrar om sorteringen är stigande/fallande
  sortDirection = signal<"asc" | "desc">("asc");

  // Funktion som körs när användaren klickar på ett av <th>-fälten
  setSort(field: "code" | "coursename" | "progression") {

    if (this.sortField() === field) {
      // om klick på redan vald kolumn, byt riktning
      this.sortDirection.update(dir => dir === "asc" ? "desc" : "asc");
    } else {
      // om klick på ny kolumn, stigande sortering
      this.sortField.set(field);
      this.sortDirection.set("asc");
    }

  }

  // Läs in kurser när sidan laddas
  ngOnInit() {
    this.courseService.loadCourses();
  }

  // returnerar en sorterad kopia av kurslistan
  sortedCourses = computed(() => {

    // hämta kurser från service
    const courses = this.courseService.courses();
    // hämta valt sorteringsfält
    const field = this.sortField();
    // hämta sorteringsriktning
    const direction = this.sortDirection();

    // skapa kopia av arrayen och sortera den
    return [...courses].sort((a, b) => {

      // stigande ordning
      if (direction === "asc") {
        return a[field] > b[field] ? 1 : -1;
      }

      // fallande ordning
      return a[field] < b[field] ? 1 : -1;
    });

  });
}
