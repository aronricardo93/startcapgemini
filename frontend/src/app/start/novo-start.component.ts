import { Component } from '@angular/core';
import { StartService } from '../service/start.service';
import { Start } from '../models/Start';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-start',
  templateUrl: './novo-start.component.html',
  styleUrls: ['./novo-start.component.css']
})


export class NovoStartComponent {

  nome: string = '';
  stack: string = '';
  regiao: string = '';
  
  
  ngOnInit(){
    
  }
  
  constructor(private startService: StartService, 
              private toastr: ToastrService,
              private router: Router){}
              
  cadastrar(): void {
    const start = new Start(this.nome, this.stack, this.regiao);
    this.startService.salvar(start)
      .subscribe(
        data => {
          this.toastr.success('Novo start cadastrado!', 'Ok', CONFIG_TOASTR);
          this.router.navigate(['/']);
        },
        err => {
          const mensagemErro = err.error || 'Erro desconhecido';
          this.toastr.error(mensagemErro, 'Falha', CONFIG_TOASTR);
          this.router.navigate(['']);
        }
      );
  }
}

// Constantes para a configuração do Toastr
const CONFIG_TOASTR = { timeOut: 3000, positionClass: 'toast-top-center' };