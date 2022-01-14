import { MembroService } from './../membro.service';
import { Membro } from './../membro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membro-create',
  templateUrl: './membro-create.component.html',
  styleUrls: ['./membro-create.component.css']
})
export class MembroCreateComponent implements OnInit {

  membro: Membro = new Membro();
  submitted = false;


  constructor(private servico: MembroService) { }

  ngOnInit(): void {
  }

  novoCadastro(): void {
       this.submitted = false;
       this.membro = new Membro();
  }

  save(){
    this.servico.createMembro(this.membro)
    .subscribe(data => console.log(data), error => console.log(error));
    this.membro = new Membro();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
