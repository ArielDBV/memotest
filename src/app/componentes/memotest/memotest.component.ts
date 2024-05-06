import { Component } from '@angular/core';
import { Pieza } from '../../Clases/pieza';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memotest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memotest.component.html',
  styleUrl: './memotest.component.css'
})
export class MemotestComponent {
  public piezas: Array<Pieza> = new Array<Pieza>();
  
  public dorso: string= "https://cdn.alfabetajuega.com/alfabetajuega/2021/06/shingeki-no-kyojin-1.jpg";




  constructor() {
    let numeros: Number[] = new Array<Number>();

    let cantPiezas = 16;
    while (numeros.length < cantPiezas) {
      let valor = Math.floor(Math.random() * (cantPiezas / 2));
      if (valor < (cantPiezas / 2) && numeros.filter(x => x == valor).length < 2)
        numeros.push(valor);
    }

    numeros.forEach(element => {
      let imagen = "";
      switch (element) {
        case 0:
          imagen = "https://i.blogs.es/b5f10d/ymir/450_1000.jpeg";
          break;
        case 1:
          imagen = "https://www.clarin.com/img/2023/07/26/TCKhF4Ebt_720x0__1.jpg";
          break;
        case 2:
          imagen = "https://cdn.alfabetajuega.com/alfabetajuega/2023/12/la-seiyuu-de-mikasa-ackerman-de-ataque-a-los-titanes-recibio-amenazas-de-muerte.jpg?width=462&aspect_ratio=3:2&format=nowebp";
          break;
        case 3:
          imagen = "https://areajugones.sport.es/wp-content/uploads/2020/03/ataque-a-los-titanes-masculino.jpg";
          break;
        case 4:
          imagen = "https://hips.hearstapps.com/hmg-prod/images/ataque-a-los-titanes-temporada-1-644d1701d7e18.jpeg?resize=980:*";
          break;
          case 5:
          imagen = "https://www.clarin.com/img/2023/07/26/jiAZGWGMG_720x0__1.jpg";
          break;
          case 6:
          imagen = "https://areajugones.sport.es/wp-content/uploads/2020/03/levi-ackerman-1024x576.jpg";
          break;
          case 7:
          imagen = "https://cdn.alfabetajuega.com/alfabetajuega/2020/11/mikasa-y-armin-ataque-a-los-titanes.jpg";
          break;
          case 8:
          imagen = "https://bloygo.yoigo.com/embed/ed30b5de4dee884e231cbaa12d55011691746934/Zeke-Yeager.jpg";
          break;
        default:

      }

      this.piezas.push({ imagen: imagen, descubierta: false, seleccionada: false });
    });

  }

  validar() {
    let sel = this.piezas.filter(x => x.seleccionada && !x.descubierta);
    if (sel.length == 2) {
      sel[0].seleccionada = false;
      sel[1].seleccionada = false;
      sel[0].descubierta = sel[1].imagen == sel[0].imagen;
      sel[1].descubierta = sel[1].imagen == sel[0].imagen;

    }
  }


}
