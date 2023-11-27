import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  inputMessage: string = '';
  mensagens: string[] = [];
  isExpandida: boolean = false;
  imagemUrl: string | ArrayBuffer | null = null;
  enviarMensagem() {
    if (this.inputMessage.trim() !== '') {
      this.mensagens.push(this.inputMessage);
      this.inputMessage = '';
    }
  }
  deveExpandirAltura(mensagem: string): boolean {
    return mensagem.length > 20;
  }
  enviarImagem(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagemUrl = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
