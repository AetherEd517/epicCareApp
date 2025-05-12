import { Component, OnInit } from '@angular/core';
import { AlertController, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular';

interface Pregunta {
  id: number;
  texto: string;
  opciones: string[];
  respuesta?: string;
}

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.page.html',
  styleUrls: ['./cuestionario.page.scss'],
  standalone: false,
})
export class CuestionarioPage implements OnInit {
  preguntas: Pregunta[] = [
      {
        id: 1,
        texto: '¿Qué es la epilepsia?',
        opciones: [
          'Condición que provoca crisis o convulsiones.',
          'Una infección contagiosa del cerebro.',
          'Un problema del corazón.',
          'Una alergia a la luz.'
        ]
      },
      {
        id: 2,
        texto: '¿Qué tipo de crisis epiléptica afecta todo el cerebro?',
        opciones: [
          'Crisis focales.',
          'Crisis generalizadas.',
          'Crisis parciales.',
          'Crisis emotivas.'
        ]
      },
      {
        id: 3,
        texto: '¿Cuál de estos factores puede causar epilepsia?',
        opciones: [
          'Lesiones en la cabeza.',
          'Dormir más de 10 horas.',
          'Comer muchos dulces.',
          'Ver mucha televisión.'
        ]
      },
      {
        id: 4,
        texto: '¿Qué es un aura epiléptica?',
        opciones: [
          'Una especie de aviso antes de una crisis, con sensaciones extrañas.',
          'Un sonido misterioso que ocurre en el cerebro.',
          'Una medicina contra la epilepsia.',
          'Un dibujo en la piel durante la crisis.'
        ]
      },
      {
        id: 5,
        texto: '¿Cuál de estos es un síntoma común durante una crisis epiléptica?',
        opciones: [
          'Movimientos bruscos e incontrolables del cuerpo (convulsiones).',
          'Fiebre alta.',
          'Dolor de garganta.',
          'Hambre repentina.'
        ]
      },
      {
        id: 6,
        texto: '¿Qué prueba médica registra la actividad eléctrica del cerebro para ayudar a diagnosticar epilepsia?',
        opciones: [
          'Electroencefalograma (EEG).',
          'Resonancia magnética.',
          'Radiografía de tórax.',
          'Análisis de sangre.'
        ]
      },
      {
        id: 7,
        texto: '¿Cuál de estas afirmaciones es FALSA sobre la epilepsia?',
        opciones: [
          'La epilepsia no se contagia de persona a persona.',
          'Con tratamiento adecuado, las personas con epilepsia pueden llevar una vida normal.',
          'Las personas con epilepsia no pueden hacer ejercicio.',
          'La epilepsia es un trastorno neurológico, no una enfermedad mental.'
        ]
      },
      {
        id: 8,
        texto: 'Durante una crisis epiléptica, ¿qué debes hacer para ayudar a la persona?',
        opciones: [
          'Sujetarla con fuerza para que no se mueva.',
          'Colocar algo suave (como una ropa doblada) bajo su cabeza.',
          'Meterle un objeto en la boca.',
          'Gritarle al oído para despertarla.'
        ]
      },
      {
        id: 9,
        texto: 'La epilepsia es un trastorno neurológico, no una enfermedad mental.',
        opciones: ['Verdadero', 'Falso']
      },
      {
        id: 10,
        texto: 'Un aura epiléptico es una señal de alerta antes de que ocurra una crisis.',
        opciones: ['Verdadero', 'Falso']
      }
    ];

    correctas: string[] = [
      'Condición que provoca crisis o convulsiones.',
      'Crisis generalizadas.',
      'Lesiones en la cabeza.',
      'Una especie de aviso antes de una crisis, con sensaciones extrañas.',
      'Movimientos bruscos e incontrolables del cuerpo (convulsiones).',
      'Electroencefalograma (EEG).',
      'Las personas con epilepsia no pueden hacer ejercicio.',
      'Colocar algo suave (como una ropa doblada) bajo su cabeza.',
      'Verdadero',
      'Verdadero'
    ];

  async enviarResultados() {
      let puntos = 0;
      this.preguntas.forEach((p, i) => {
        if (p.respuesta && p.respuesta === this.correctas[i]) {
          puntos++;
        }
      });
      await this.mostrarCalificacion(puntos);
    }
  
    async mostrarCalificacion(puntos: number) {
      const total = this.preguntas.length;
      let mensaje = '';
    
      const porcentaje = (puntos / total) * 100;
    
      if (porcentaje === 100) {
        mensaje = '¡Excelente! 🎉 ¡Respondiste todo correctamente! Eres un experto en epilepsia.';
      } else if (porcentaje >= 80) {
        mensaje = '¡Muy bien! 😊 Solo algunas fallas, pero aprendiste bastante.';
      } else if (porcentaje >= 60) {
        mensaje = '¡Buen intento! 👏 Aún puedes mejorar, repasa un poco y vuelve a intentarlo.';
      } else {
        mensaje = 'No te preocupes 😅, lo importante es aprender. ¡Sigue practicando y lo harás mejor!';
      }
    
      // O si usas un modal en Ionic:
      
      const alert = await this.alertController.create({
        header: 'Resultado',
        message: `Tu calificación es ${puntos} de ${total}.\n${mensaje}`,
        buttons: ['OK']
      });
      await alert.present();
      
    }
    
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}
