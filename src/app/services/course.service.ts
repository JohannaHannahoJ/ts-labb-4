import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Course } from '../interfaces/course';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url: string = "https://webbutveckling.miun.se/files/ramschema.json";
  private http = inject(HttpClient) // aktiverar HttpClient

  courses = signal<Course[]>([]); // signal som ska lagra kurserna
  loading = signal<boolean>(false); // signal som håller koll på om data laddas

  // Hämta kurser från API
  async loadCourses(): Promise<void> {
    this.loading.set(true); // sätt igång laddning

    try {
      //Skicka request till Api:t
      const courses = await firstValueFrom(
        this.http.get<Course[]>(this.url)
      );
      //Sparar kurserna i signalen
      this.courses.set(courses);

    } finally {
      // avsluta laddning genom att sätta booleanen till false
      this.loading.set(false);

    }

  }
}