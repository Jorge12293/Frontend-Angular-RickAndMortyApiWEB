import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable,take } from 'rxjs';

import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  
  character!: Character;

  constructor(private route:ActivatedRoute,private characterSvc : CharacterService,private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((param)=>{
      const id = param['id'];
      this.characterSvc.getDetails(id)
        .pipe(take(1))
        .subscribe((res:any)=>{
          this.character={
            id:res['id'],
            name:res['name'],
            image:res['image'],
            species:res['species'],
            gender:res['gender'],
            created:res['created'],
            sttus:res['status'],
          };
      });

    });




/*

    this.characterSvc.searchCharacters(this.query,this.pageNum)
    .pipe(take(1))
    .subscribe((res:any)=>{
      if(res?.results?.length){
        console.log(res);
        const {info,results} = res;
        this.characters = [... this.characters, ...results];
        this.info=info;
      }else{
        this.characters = [];
      }
    });*/
  }

  onGoBack():void{
    this.location.back();
  }

}
