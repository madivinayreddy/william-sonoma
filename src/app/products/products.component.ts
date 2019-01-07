import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[];
  constructor(
    private sharedService: SharedService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.sharedService._data.subscribe(value => {
      this.products = [...value];
    });
    this.title.setTitle('Products');
    this.meta.addTag({
      name: 'description',
      content: 'Product Page of William Sonoma'
    });
  }
}
