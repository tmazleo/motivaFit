import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.css']
})
export class CadComponent {
  userData: any = {};

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.userData).subscribe(
      response => {
        console.log('Usuário criado com sucesso:', response);
        alert("Conta registrada com Sucesso!");
        location.reload();
      },
      error => {
        console.error('Erro ao criar usuário:', error);
        // Lide com erros aqui
      }
    );
  }
}
