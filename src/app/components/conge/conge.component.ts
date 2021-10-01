import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Conge } from 'src/app/models/conge';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss'],
})
export class CongeComponent implements AfterViewInit {
  displayedColumns: string[] = ['nbrJour', 'dateSortie', 'dateRetour', 'etat'];
  dataSource = new MatTableDataSource<Conge>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Conge[] = [
  {
    id: 'moakdzo',
    nbrJour: 3,
    dateSortie: new Date('2/11/2020'),
    dateRetour: new Date('2/14/2020'),
    etat: 'Validé',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('2/11/2020'),
    dateRetour: new Date('2/23/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 10,
    dateSortie: new Date('2/11/2020'),
    dateRetour: new Date('2/21/2020'),
    etat: 'Validé',
  },
  {
    id: 'moakdzo',
    nbrJour: 12,
    dateSortie: new Date('2/04/2020'),
    dateRetour: new Date('2/16/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 6,
    dateSortie: new Date('2/4/2020'),
    dateRetour: new Date('2/11/2020'),
    etat: 'Refusé',
  },
  {
    id: 'moakdzo',
    nbrJour: 6,
    dateSortie: new Date('2/11/2020'),
    dateRetour: new Date('2/17/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 1,
    dateSortie: new Date('2/11/2020'),
    dateRetour: new Date('2/12/2020'),
    etat: 'En Attente',
  },
  {
    id: 'moakdzo',
    nbrJour: 2,
    dateSortie: new Date('2/1/2020'),
    dateRetour: new Date('2/3/2020'),
    etat: 'Refusé',
  },
];
