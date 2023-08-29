import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  allowNewSchool = false
  createdSchoolStatus = "Nenhuma escola criada"
  schoolName = "nome de teste";
  schoolCreated = false
  schools = ['escola1' , 'escola2']

  constructor() {

  }
  ngOnInit(): void {
    setTimeout(()=> {
      this.allowNewSchool=true;
    },1000)
  }

  createSchool(){
    this.schoolCreated = true
    this.createdSchoolStatus = "Escola foi criada com o nome de " + this.schoolName
    this.schools.push(this.schoolName)
  }
  updateSchoolName(event: Event) {
    this.schoolName = (<HTMLInputElement>event.target).value
  }
}
