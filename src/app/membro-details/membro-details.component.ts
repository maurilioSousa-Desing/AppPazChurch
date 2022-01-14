import { Component, Input, OnInit } from '@angular/core';
import { Membro } from '../membro';
import { MembroListComponent } from '../membro-list/membro-list.component';
import { MembroService } from '../membro.service';

@Component({
  selector: 'app-membro-details',
  templateUrl: './membro-details.component.html',
  styleUrls: ['./membro-details.component.css']
})
export class MembroDetailsComponent implements OnInit {

  @Input()
  membro!: Membro;

  constructor(private servico: MembroService, private listaMembros: MembroListComponent) { }

  ngOnInit(): void {
  }

  updateAtivo(isAtivo: boolean) {
    this.servico.updateMembro(this.membro.id,
      { nome: this.membro.nome, cpf: this.membro.cpf, ativo: isAtivo })
      .subscribe(
        data => {
          console.log(data);
          this.membro = data as Membro;
        },
        error => console.log(error));
  }

  deletarMembro() {
    this.servico.deleteMembro(this.membro.id)
      .subscribe(
        data => {
          console.log(data);
          this.listaMembros.reloadData();
        },
        error => console.log(error));
  }
}
