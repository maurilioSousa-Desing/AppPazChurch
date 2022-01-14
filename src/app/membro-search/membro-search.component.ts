import { Membro } from './../membro';
import { Component, OnInit } from '@angular/core';
import { MembroService } from '../membro.service';

@Component({
  selector: 'app-membro-search',
  templateUrl: './membro-search.component.html',
  styleUrls: ['./membro-search.component.css']
})
export class MembroSearchComponent implements OnInit {

  cpf!: number;
  membros: Membro[] = [];

  constructor(private servico: MembroService) { }

  ngOnInit(): void {
  }

  private pesquisarMembros(){
    this.servico.getMembroByCpf(this.cpf)
    .subscribe(dados => this.membros = dados);
  }

  onSubmit(){
    this.pesquisarMembros();
  }
}
