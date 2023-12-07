import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topic';
import { News } from '../model/news';
import { CreateBlockService } from './createblock.service';

@Component({
  selector: 'app-createblock',
  templateUrl: './createblock.component.html',
  styleUrls: ['./createblock.component.css']
})
export class CreateblockComponent implements OnInit {
  constructor(private http: CreateBlockService) { }
  listTopic: Topic[] = [];
  listNews: News[] = [];
  news!: News;
  ngOnInit(): void {
    this.http.getNews().subscribe((res: any) => {
      console.log(res);
      this.listNews = res;
    });
    this.http.getTopic().subscribe((res: any) => {
      console.log(res);
      this.listTopic = res;
    });
  }
  onFileSelected(event: any): void {
    this.news.file = event.target.files[0];
  }

  onSubmit() { }
}
