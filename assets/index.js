document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("saldo").value = parseFloat(500);
});
const arrayPath = [
  "./assets/aguia.png",
  "./assets/burro.png",
  "./assets/avestruz.png",
  "./assets/borboleta.png",
  "./assets/cabra.png",
  "./assets/cachorro.png",
  "./assets/camelo.png",
  "./assets/carneiro.png",
  "./assets/cavalo.png",
  "./assets/cobra.png",
  "./assets/coelho.png",
  "./assets/elefante.png",
  "./assets/galo.png",
  "./assets/gato.png",
  "./assets/jacare.png",
  "./assets/leao.png",
  "./assets/macaco.png",
  "./assets/pavao.png",
  "./assets/peru.png",
  "./assets/porco.png",
  "./assets/tigre.png",
  "./assets/touro.png",
  "./assets/urso.png",
  "./assets/vaca.png",
  "./assets/veado.png",
  "./assets/bangu777.png",

];

let currentIndex = 0;
let contador = 0;
let saldoSelector = document.getElementById("saldo");
let apostaSelector = document.getElementById("aposta");
let logoBicho = document.getElementById("logoBicho");
let saldo = parseFloat(saldoSelector.value);
let aposta = parseFloat(apostaSelector.value);
let audio = document.getElementById("audios");
let chanceDeIguais = 2.5;
let propinaModal = document.getElementById("propina");
let contadorCafe = 0;
const buttonSamangos = document.getElementById("buttonSamango");

function classButtonSamangoAdd(){
  buttonSamangos.classList.remove("button_spin");
  buttonSamangos.classList.add("button_samango_boost");
}
function classButtonSamangoRmv(){
  buttonSamangos.classList.remove("button_samango_boost");
  buttonSamangos.classList.add("button_spin");
}
function pagarPropina(){
  
  const valorPropinaModal = propinaModal.value;

  const modalSamango = document.getElementById("modalSamango");

  if(valorPropinaModal >= 20 && valorPropinaModal <50){

    saldoSelector.value = saldoSelector.value - valorPropinaModal;
    chanceDeIguais = 3.5;
    modalSamango.style.display = "none";
    buttonSamangos.textContent = "Boost 3.5%";
    buttonSamangos.disabled = true;
    classButtonSamangoAdd();
  }
  
  else if(valorPropinaModal < 20 ){
    
    alert("Ta querendo arrumar uma com o Lacerda e sua turma ? Te orienta moluscão o arrego mínimo é R$ 20.");
    modalSamango.style.display = "none";
    buttonSamangos.disabled = true;

  }
  else if(valorPropinaModal >=50 && valorPropinaModal <=89){

    saldoSelector.value = saldoSelector.value - valorPropinaModal;
    chanceDeIguais = 4.5;
    modalSamango.style.display = "none";
    buttonSamangos.textContent = "Boost 4.5%";
    buttonSamangos.disabled = true;
    classButtonSamangoAdd();
  }
  else if(valorPropinaModal >= 90){
    saldoSelector.value = saldoSelector.value - valorPropinaModal;
    chanceDeIguais = 5.5;
    modalSamango.style.display = "none";
    buttonSamangos.textContent = "Boost 5.5%";
    buttonSamangos.disabled = true;
    classButtonSamangoAdd();

  }
  
}
function winImageEffect() {
  document.getElementById("img1").classList.add("animation_effect");
  document.getElementById("img2").classList.add("animation_effect");
  document.getElementById("img3").classList.add("animation_effect");
}
function winImageRemoveEffect() {
  document.getElementById("img1").classList.remove("animation_effect");
  document.getElementById("img2").classList.remove("animation_effect");
  document.getElementById("img3").classList.remove("animation_effect");
}
function percorreArray(array) {
  const arrayEmbaralhado = arrayPath;
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j],arrayEmbaralhado[i],];
  }

  const numeroAleatorio = Math.random() * 100;

  if (numeroAleatorio <= chanceDeIguais) {
    const imagemIgual =
      arrayEmbaralhado[Math.floor(Math.random() * arrayEmbaralhado.length)];
    document.getElementById("img1").src = imagemIgual;
    document.getElementById("img2").src = imagemIgual;
    document.getElementById("img3").src = imagemIgual;
  } else {
    const imageIds = ["img1", "img2", "img3"];
    for (let i = 0; i < imageIds.length; i++) {
      const imgElement = document.getElementById(imageIds[i]);
      if (imgElement) {
        imgElement.src = arrayEmbaralhado[i];
      }
    }
  }
  let img1 = document.getElementById("img1").src;
  let img2 = document.getElementById("img2").src;
  let img3 = document.getElementById("img3").src;

  img1 = img1.replace(/^file:\/\/.*?\/assets\//, "/assets/");
  img2 = img2.replace(/^file:\/\/.*?\/assets\//, "/assets/");
  img3 = img3.replace(/^file:\/\/.*?\/assets\//, "/assets/");

  console.log(img1, img2, img3);
  if (
    img1 === img2 &&
    img1 === img3 &&
    img1 != "/assets/bangu777.png" &&
    img1 != "/assets/coelho.png" &&
    img1 != "/assets/cachorro.png"
  ) {
    winImageEffect();
    audio.src = "./assets/2.5x.mp3";
    audio.play();
    let resultado =
      parseFloat(saldoSelector.value) +
      parseFloat(apostaSelector.value) * parseFloat(2.5);
    saldoSelector.value = resultado;

    logoBicho.src = "./assets/logo_2.5x.png";
    contadorCafe++;
    contador = 20;
  } else if (
    img1 === "/assets/bangu777.png" &&
    img2 === "/assets/bangu777.png" &&
    img3 === "/assets/bangu777.png"
  ) {
    winImageEffect();
    audio.src = "./assets/15x.mp3";
    audio.play();
    let resultado =
      parseFloat(saldoSelector.value) +
      parseFloat(apostaSelector.value) * parseFloat(15);
    saldoSelector.value = resultado;

    logoBicho.src = "./assets/logo_15x.png";
    contador = 20;
    contadorCafe++;
    if(saldoSelector.value == 0){
      openModalAgiota();
    }
  } else if (
    img1 === "/assets/cachorro.png" &&
    img2 === "/assets/cachorro.png" &&
    img3 === "/assets/cachorro.png"
  ) {
    winImageEffect();

    audio.src = "./assets/2.5x.mp3";
    audio.play();
    let resultado =
      parseFloat(saldoSelector.value) +
      parseFloat(apostaSelector.value) * parseFloat(5);
    saldoSelector.value = resultado;

    logoBicho.src = "./assets/logo_5x.png";
    contador = 20;
    contadorCafe++;
    if(saldoSelector.value == 0){
      openModalAgiota();
    }
  } else if (
    img1 === "/assets/coelho.png" &&
    img2 === "/assets/coelho.png" &&
    img3 === "/assets/coelho.png"
  ) {
    winImageEffect();

    audio.src = "./assets/2.5x.mp3";
    audio.play();
    let resultado =
      parseFloat(saldoSelector.value) +
      parseFloat(apostaSelector.value) * parseFloat(7);
    saldoSelector.value = resultado;
    logoBicho.src = "./assets/logo_7x.png";
    contador = 20;
    contadorCafe++;
    if(saldoSelector.value == 0){
      openModalAgiota();
    }
  } else if (contador == 14) {
    audio.src = "./assets/fail.mp3";
    audio.playbackRate = 4;
    audio.play();
    logoBicho.src = "./assets/logo_lose.png";
    contadorCafe++;
    if(saldoSelector.value == 0){
      openModalAgiota();
    }
  }
}
function spinRoleta() {
  contador = 0;

  if(contadorCafe == 5){
    chanceDeIguais = 2.5;
    contadorCafe = 0;
    classButtonSamangoRmv();
    buttonSamangos.textContent = "Cafézinho";
    buttonSamangos.disabled = false;

  }

  logoBicho.src = "./assets/logo.png";
  winImageRemoveEffect();
  if (parseFloat(saldoSelector.value) >= parseFloat(apostaSelector.value)) {

    let novoSaldo =
      parseFloat(saldoSelector.value) - parseFloat(apostaSelector.value);
    saldoSelector.value = novoSaldo;

    const numeroDeContagens = 15;

    function EmbaralharImgs() {
      percorreArray();
      contador++;

      if (contador >= numeroDeContagens) {
        document.getElementById("spin").classList.remove("hidden");
        document.getElementById("spin").classList.add("show");
      } else {
        document.getElementById("spin").classList.remove("show");
        document.getElementById("spin").classList.add("hidden");
      }
      if (contador < numeroDeContagens) {
        setTimeout(EmbaralharImgs, 200);
      }
    }
    EmbaralharImgs();
  } else if (
    parseFloat(apostaSelector.value) <= 0 ||
    apostaSelector.value === ""
  ) {
    alert("Você está tentando apostar 0 Doutor Castor não aceita vacilagem!");
  } else {
    alert(
      "Você não tem saldo para apostar, seu saldo é de R$ " +
        saldoSelector.value
    );
  }
}
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
function openModalSamango() {
  const modalSamango = document.getElementById("modalSamango");
  modalSamango.style.display = "block";
}

window.addEventListener("click", function (event) {
  const modalSamango = document.getElementById("modalSamango");
  const modalSacar = document.getElementById("modal_sacar");

  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == modalSamango){
    modalSamango.style.display = "none";
  }
});
