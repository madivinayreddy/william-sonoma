import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.sharedService._data.subscribe(async value => {
      const id = this.route.snapshot.paramMap.get('id');
      this.product = await value.filter(element => id === element.id)[0];
      this.title.setTitle(`Product View`);
    });
  }

  openDialog(selected: string) {
    this.dialog.open(ProductDialogComponent, {
      width: '800px',
      maxWidth: '90vw',
      data: { data: this.product.images, selected }
    });
  }
}
