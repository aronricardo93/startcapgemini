import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StartService } from '../service/start.service';
import { Start } from '../models/Start';

@Component({
  selector: 'app-dados-start',
  templateUrl: './dados-start.component.html',
  styleUrls: ['./dados-start.component.css']
})
export class DadosStartComponent {

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
        this.start = data
      },
      err => {
        this.toastr.error(err.error, 'Falha',
        {timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )
  }

  btnVoltar(): void{
    this.router.navigate(['/']);
  }
}


