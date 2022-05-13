import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  TechNews: any = [];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.tech().subscribe((result) =>{
      this.TechNews = result.articles;
    })
  }

}
