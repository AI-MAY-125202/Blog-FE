import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root',
})
export class CreateBlockService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'news/getall');
  }

  getTopic(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'topic/getall');
  }

  createNews(news: News): Observable<any> {
    const formData = new FormData();
    formData.append('idTopic', JSON.stringify(news.idTopic));
    formData.append('content', news.content);
    formData.append('type', JSON.stringify(news.type));
    formData.append('file', news.file);
    return this.http.post<any>(this.apiUrl + 'news/create', formData);
  }
}