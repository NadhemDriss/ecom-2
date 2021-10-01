import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conge } from '../models/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8080/conge/';
  constructor(private  http: HttpClient) { }
  getAllConges(): Promise<Conge[]> {
    //return new Promise((resolve) => resolve(GLOBAL._DB.members));
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.get<Conge[]>(this.apiUrl + 'all',{headers:options})?.toPromise();
  }

  deleteConge(id: any) {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.delete<Conge[]>(this.apiUrl + id,{headers:options})?.toPromise();
  }

  getCongeById(id: any): Promise<Conge> {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.get<Conge>(this.apiUrl + id,{headers:options})?.toPromise();
  }

  update(conge: Conge): Promise<Conge> {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    console.log(conge);
    return this.http.put<Conge>(this.apiUrl, conge,{headers:options}).toPromise();
  }
  getCongeByEtat(etat: string): Promise<Conge[]> {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.get<Conge[]>(this.apiUrl + etat,{headers:options})?.toPromise();
  }
}
