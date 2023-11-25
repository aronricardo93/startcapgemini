import { Component } from '@angular/core';
import { Start } from '../models/Start';
import { StartService } from '../service/start.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-start',
  templateUrl: './lista-start.component.html',
  styleUrls: ['./lista-start.component.css']
})
export class ListaStartComponent {

  starts: Start[] = [];
  
    ngOnInit(){
      this.listarStarts();
    }

  constructor(private startService: StartService,
              private toastr: ToastrService       
              ){ }

  listarStarts(): void{
    this.startService.lista()
    .subscribe(data => this.starts = data);
  }

  deletar(id: any){
    this.startService.delete(id)
    .subscribe(data => {
      this.toastr.success('Start deletado!', 'Ok',
      {timeOut: 3000, positionClass: 'toast-top-center'});
      this.listarStarts();
    },
    err => {
      this.toastr.error(err.error, 'Falha',
      {timeOut: 3000, positionClass: 'toast-top-center'});
    });
  }
}