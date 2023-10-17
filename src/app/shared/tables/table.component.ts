import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';


interface OnInit {
  ngOnInit(): void
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columnas :any;
  @Input() data:any;
  @Input() title:any;
  dataSource:any;
  
  ngOnInit() {
    console.log(this.columnas);
    
    this.dataSource = new MatTableDataSource(this.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data, {header:[]});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'filename.xlsx');
}
}
