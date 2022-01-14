import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembroService{

   private readonly API = 'api/membros';

  constructor(private http: HttpClient){}

  getMembro(id: number): Observable<Object> {
    return this.http.get('${this.API}/${id}');
  }

  createMembro(membro: Object): Observable<Object> {
    return this.http.post('${this.API}' + '/create', membro);
  }

  updateMembro(id: number, value: any): Observable<Object> {
    return this.http.put('${this.API}/${id}', value);
  }

  deleteMembro(id: number): Observable<any> {
    return this.http.delete('${this.API}/${id}', { responseType: 'text' });
  }

  getListaMembro(): Observable<any> {
    return this.http.get('${this.API}');
  }

  getMembroByCpf(cpf: number): Observable<any> {
    return this.http.get('${this.API}/cpf/${cpf}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete('${this.API}' + '/delete', { responseType: 'text' });
  }

}
