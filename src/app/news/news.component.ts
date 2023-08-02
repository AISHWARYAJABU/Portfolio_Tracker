
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsItem {
  category: string;
  datetime: number;
  headline: string;
  image: string;
  source: string;
  summary: string;
  url: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    const apiUrl = 'https://finnhub.io/api/v1/news?category=general&token=cj3omfhr01qsj5njo720cj3omfhr01qsj5njo72g';
    this.http.get(apiUrl).subscribe((data: any) => {
      const marketWatchNews = data.filter((item: NewsItem) => item.source === 'MarketWatch').slice(0, 12);
      this.news = marketWatchNews;
    });
  }
}

