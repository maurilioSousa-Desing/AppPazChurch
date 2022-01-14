import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Membro } from '../membro';
import { MembroService } from './../membro.service';

@Component({
  selector: 'app-membro-list',
  templateUrl: './membro-list.component.html',
  styleUrls: ['./membro-list.component.css']
})
export class MembroListComponent implements OnInit {

  membros!: Observable<Membro[]>

  constructor(private servico: MembroService) { }

  ngOnInit(){
    this.reloadData();
  }

  deleteTodosMembros() {
    this.servico.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.membros = this.servico.getListaMembro();
  }


}
