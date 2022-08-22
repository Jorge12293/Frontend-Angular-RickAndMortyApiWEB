import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor(private routter:Router){}

  ngOnInit(): void {
  }

  onSearch(value: string){
    if(value && value.length>3){
      this.routter.navigate(['/character-list'],
      {queryParams:{q:value}}
      );
    }
  }
}
