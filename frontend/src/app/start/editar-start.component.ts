import { Component } from '@angular/core';
import { Start } from '../models/Start';
import { StartService } from '../service/start.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-start',
  templateUrl: './editar-start.component.html',
  styleUrls: ['./editar-start.component.css']
})
export class EditarStartComponent {

  start: Start = new Start('', '', '');

  constructor(
    private startService: StartService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.startService.dadosPorId(id).subscribe(
      data => { 
        this.start = data; 
    },
      err => {
        this.toastr.error(err.error, 'Falha',
        {timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )
  }

  atualizar(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.startService.update(id, this.start).subscribe(
      data => {
        this.toastr.success('Start atualizado!', 'Ok', CONFIG_TOASTR);
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