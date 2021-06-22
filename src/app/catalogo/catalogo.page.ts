import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public alertController: AlertController,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Cafe expresso',
      subHeader: 'Valor de $5.00',
      message: `<img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2013/04/cafe-espresso.jpg" width="100">
      <br/>7-12gr de café recién molido (specialty coffee),cafetera espresso usando agua purificada buen molino tamper (compresor de café) 1 taza entre 50 y 70 ml`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Espresso Macchiato',
      subHeader: 'Valor de $10.00',
      message: `<img src="https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Espresso-Macchiato.jpg" width="100">
      <br/>18 g (0,6 onzas) de granos de café
      60 ml (2 onzas) de agua
      30 ml (1 onza) de leche`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Espresso Panna.',
      subHeader: 'Valor de $15.00',
      message: `<img src="https://www.lajoyadelcafe.com/wp-content/uploads/2018/07/Espresso-Con-Panna3F.jpg" width="100">
      <br/>El Espresso con Panna significa «espresso con crema» en italiano. Antes de que los baristas de todo el mundo pusieran nata montada en los cafés con leche`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Espresso Americano.',
      subHeader: 'Valor de $5.00',
      message: `<img src="https://excelso77.com/wp-content/uploads/2017/08/la-diferencia-cafe-americano-expreso.jpg" width="100">
      <br/>Café americano: Por otro lado, la preparación del americano es también a través de una máquina de café, siendo en realidad un espresso diluido en agua caliente`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Cappuccino.',
      subHeader: 'Valor de $15.00',
      message: `<img src="https://todocafe.es/wp-content/uploads/2020/04/Cafe_capuchino.jpg" width="100">
      <br/> es una bebida nacida en Italia, preparada con café espresso y leche montada con vapor para darle cremosidad. Un capuchino se compone de 125 ml de leche y 25 ml de café espresso, en ocasiones se agrega cacao en polvo o canela según el gusto del consumidor.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Café Latte',
      subHeader: 'Valor de $20.00',
      message: `<img src="https://cdn.kiwilimon.com/recetaimagen/36986/th5-640x426-46349.jpg" width="100">
      <br/>El café latte es el hermano mayor del capuchino, donde todo gira en torno a la espuma suave y sedosa. Normalmente, el café latte se prepara con una o dos dosis de expreso (1/3 de la bebida) y 2/3 de leche calentada con vapor, con una pequeña capa (alrededor de 1 cm) de espuma de leche`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert6() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Vainilla Latte.',
      subHeader: 'Valor de $25.00',
      message: `<img src="https://www.torani.com/sites/default/files/styles/torani_syrup_recipe_detail/public/recipes/illustration/b52_0.jpg?itok=Zxxo7bPg" width="100">
      <br/>El Vanilla Latte es un café con leche clásico , uno de los primeros en aparecer en Starbucks. Está hecho con espresso con cuerpo, leche cremosa al vapor y jarabe de vainilla clásico .`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert7() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Caramel Macchiato.',
      subHeader: 'Valor de $35.00',
      message: `<img src="https://cdn.kiwilimon.com/recetaimagen/36988/th5-640x426-46353.jpg" width="100">
      <br/>Caramel Macchiato es una variación de Latte o Café Macchiato y se sirve caliente o frío. Como el Café Macchiato es una bebida de café, leche y leche espumada pero con sabor a vainilla y caramelo.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert8() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: 'Café Helado',
      subHeader: 'Valor de $15.00',
      message: `<img src="https://s3.amazonaws.com/mercado-ideas/wp-content/uploads/sites/2/2019/01/26171248/caf%C3%A9-con-leche-condensada.jpg" width="100">
      <br/>El café frappé o café frapé (del griego φραπέ, frapé) es un café con hielo cubierto de espuma elaborado a partir de café instantáneo. ... El término proviene del francés frappé, que significa, en este contexto, «agitado» o «helado».`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert9() {
    const alert = await this.alertController.create({
      cssClass: 'alert-buttons',
      header: ' Tinto',
      subHeader: 'Valor de $15.00',
      message: `<img src="https://www.caracteristicas.co/wp-content/uploads/2018/09/caf%C3%A9-e1578772027254.jpg" width="100">
      <br/>Tal ha sido la popularidad que ha adquirido la palabra tinto que la RAE ya incluyó una acepción en su diccionario, donde la define como "infusión de café negro" o "Dicho del café: Muy concentrado".`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'modal-button-cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Favoritos',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
