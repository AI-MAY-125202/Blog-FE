import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topic';
import { News } from '../model/news';
import { CreateBlockService } from './createblock.service';

@Component({
  selector: 'app-createblock',
  templateUrl: './createblock.component.html',
  styleUrls: ['./createblock.component.css'],
})
export class CreateblockComponent implements OnInit {
  constructor(private http: CreateBlockService) {}
  listTopic: Topic[] = [];
  listNews: News[] = [];
  news: News = { type: 0 };
  apiUrl = 'http://localhost:3000/images/';
  imageUrl: string | ArrayBuffer | null = null;
  ngOnInit(): void {
    this.http.getNews().subscribe((res: any) => {
      this.listNews = res;
    });
    this.http.getTopic().subscribe((res: any) => {
      this.listTopic = res;
      this.news.idTopic = JSON.stringify(this.listTopic[0].id);
    });
  }
  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.news.file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.news.file);
    }
  }

  onSubmit() {
    debugger;
    if (this.news.content?.trim()) {
      this.http.createNews(this.news).subscribe((res) => {
        this.listNews.unshift(res);
      });
    } else {
      alert('Bạn chưa nhập nôi dung');
    }
  }
}
