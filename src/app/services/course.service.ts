import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = "https://webbutveckling.miun.se/files/ramschema.json";
  constructor(private http: HttpClient) {}
}
