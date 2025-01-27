import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../auth/authentication.service';

@Component({
  selector: 'app-main',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'financial-buddy-webapp';
  displayedColumns: string[] = ['name', 'description'];
  products: any;

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.httpClient.get('http://api.danielancines.com/api/v1/product', {
      headers: {'Authorization': `Bearer ${this.authenticationService.user.Token}`}
    })
      .subscribe(products => {
        this.products = products;
      });
  }
}
