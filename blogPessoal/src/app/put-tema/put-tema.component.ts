import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from '../service/tema.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaSevice: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
   window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"];
    this.findByIdTema(id);
  }

  
  findByIdTema(id: number){
    this.temaSevice.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  salvar(){
    this.temaSevice.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.router.navigate(['/cadastro-tema'])
      this.alerta.showAlertSuccess('Tema atualizado com sucesso!!')
    })
  }
}
