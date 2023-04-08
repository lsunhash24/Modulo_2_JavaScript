//se invoca la función mostrarFecha()
mostrarFecha();
// función que obtiene la fecha actual
function mostrarFecha() {
    //se crea una variable con la fecha de hoy
    let fecha= new Date();
    // obtenemos dia de la semana en palabra, dia en numero, mes en palabra
    //año, hora, minutos y segundos del objeto fecha, a través de sus distintos métodos
    let diaSemana = fecha.toLocaleString('default', { weekday: 'long' });
    let dia = fecha.getDate();
    let mes = fecha.toLocaleString('default', { month: 'long' });
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let fechaHoy = "Hoy es " + diaSemana + ", " + dia + " de " + mes + " de " + anio + " y son las " + hora + " horas con " 
         + minutos +  " minutos y " + segundos + " segundos.";
    //muestra la fecha de hoy en una ventana modal de windows    
    alert(fechaHoy);
    // creamos un elemento p
    let parrafo = document.createElement('p');
    // seleccionamos el contenedor cuyo id=tiempoRestante
    let contenedor = document.querySelector('#tiempoRestante');
    // creamos una variable y le asiganamos el valor que entrega la función tiempoRestante()
    let texto = "Tiempo restante para que finalice el año: " + tiempoRestante();
    //agrhamos el texto al párrafo
    parrafo.append(texto);
    //agrgamos el párafo al contenedor
    contenedor.append(parrafo);

  }

// Cálculo del tiempo restante para que termine el año
function tiempoRestante() {
    // Obtenemos la fecha y hora actual
    let hoy = new Date();

    // Obtenemos el año actual y el siguiente año
    let anioActual = hoy.getFullYear();
    let anioSiguiente = anioActual +1;

    // Creamos una fecha para el final del año
    let finDeAnio = new Date("january 1, " + anioSiguiente + " 00:00:00");
    // console.log(finDeAnio);
    // Calculamos la diferencia en milisegundos entre la fecha actual y el fin de año
    let tiempoRestante = finDeAnio.getTime() - hoy.getTime();
    console.log(tiempoRestante);
    // Convertimos los milisegundos a días, minutos y segundos, redondeando hacia abajo con 
    // Math.floor
    let segundos = Math.floor(tiempoRestante / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Obtenemos los segundos, minutos y horas restantes después de calcular los días  (resto %)
    horas %= 24;
    // sumamos una hora porque en septiembre se adelanta la hora
    let hora = horas + 1;
    minutos %= 60;
    segundos %= 60;

    // Mostramos el resultado
    return(dias + " días, " + hora + " horas, " + minutos + " minutos y " + segundos + " segundos.");

}
