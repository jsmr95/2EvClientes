
var opcion = prompt('Introduzca la zona horaria (-12 - +12)');
var ptt = /^([+-]|0)(1[012]|\d)$/;
if (!ptt.test(opcion)) {
  alert('No ha introducido una zona horaria válida.');
}else {
  var hora = new Date();

  switch (opcion) {
    case '-12':
      hora.setHours(hora.getHours()-14); //Resto dos horas mas en todo porque de mi instancia a la UTC son dos horas de diferencia
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-11':
      hora.setHours(hora.getHours()-13);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
    break;
    case '-10':
      hora.setHours(hora.getHours()-12);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-9':
      hora.setHours(hora.getHours()-11);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-8':
      hora.setHours(hora.getHours()-10);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-7':
      hora.setHours(hora.getHours()-9);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-6':
      hora.setHours(hora.getHours()-8);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-5':
      hora.setHours(hora.getHours()-7);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
        break;
    case '-4':
      hora.setHours(hora.getHours()-6);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-3':
      hora.setHours(hora.getHours()-5);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-2':
      hora.setHours(hora.getHours()-4);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '-1':
      hora.setHours(hora.getHours()-3);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '0':
      hora.setHours(hora.getHours()-2);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+1':
      hora.setHours(hora.getHours()-1); //Resto dos horas mas en todo porque de mi instancia a la UTC son dos horas de diferencia
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+2':
      hora.setHours(hora.getHours());
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
    break;
    case '+3':
      hora.setHours(hora.getHours()+1);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+4':
      hora.setHours(hora.getHours()+2);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+5':
      hora.setHours(hora.getHours()+3);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+6':
      hora.setHours(hora.getHours()+4);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+7':
      hora.setHours(hora.getHours()+5);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+8':
      hora.setHours(hora.getHours()+6);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
        break;
    case '+9':
      hora.setHours(hora.getHours()+7);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+10':
      hora.setHours(hora.getHours()+8);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+11':
      hora.setHours(hora.getHours()+9);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
    case '+12':
      hora.setHours(hora.getHours()+10);
      console.log(`La hora en esa zona horaria es ${hora.getHours()}:${hora.getMinutes()}`);
      break;
  }
}
