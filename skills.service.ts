import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getSkillList(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(`${this.baseURL}`);
  }

  createSkill(employee: Skills): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getSkillById(id: number): Observable<Skills>{
    return this.httpClient.get<Skills>(`${this.baseURL}/${id}`);
  }

  updateSkill(skillsId: number, employee: Skills): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${skillsId}`, employee);
  }

  deleteSkill(skillId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${skillId}`);
  }
 
}
