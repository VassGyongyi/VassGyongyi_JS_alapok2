window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  esemenyKezeles2();
  esemenyKezeles3();
});

function elemekElerese1() {
  //const ELEM = document.getElementById("f1");
  const ELEM = document.querySelectorAll("h2")[0];
  console.log(ELEM.innerHTML);
}
function elemekElerese2() {
  const ELEM2 = document.getElementById("ide");
  ELEM2.innerHTML += "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  const ELEM3 = document.getElementsByClassName("ide")[0];
  ELEM3.innerHTML += "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  const LISTA = document.getElementsByClassName("lista")[0];
  let tomb = [];
  let szoveg = "";
  for (let i = 0; i < 5; i++) {
    let veletlen = Math.floor(Math.random() * 20) + 10;
    tomb[i] = veletlen;
  }
  szoveg = `<li>${tomb[0]}</li><br><li>${tomb[1]}</li><br><li>${tomb[2]}</li><br><li>${tomb[3]}</li><br><li>${tomb[4]}</li><br>`;
  console.log(szoveg);

  LISTA.innerHTML += `<ul>'${szoveg}'</ul>`;
  LISTA.classList.add("formazott");
  const ATAD = szoveg;

  LISTA.addEventListener("click", function () {
    egerEsemeny(ATAD);
  });
}
function egerEsemeny(ATAD) {
  const ELEM4 = document.getElementsByClassName("kattintasutan")[0];
  const atVett = ATAD;
  ELEM4.innerHTML += atVett;
}
function esemenyKezeles2() {
  const ELEM5 = document.getElementsByClassName("feladat")[0];
  ELEM5.innerHTML += "<button>OK</button>";
  const GOMB = document.querySelector(".feladat button");
  GOMB.addEventListener("click", function () {
    egerEsemeny2();
  });
}
function egerEsemeny2() {
  const ELEM6 = document.getElementsByClassName("feladat")[0];
  ELEM6.innerHTML +=
    "<div class=kepesDiv><img src='cobenhaven2.jpg' alt='kép'></div>";
}
function esemenyKezeles3() {
  const KEPEK = document.getElementsByTagName("img");
  console.log(KEPEK);
  for (let i of KEPEK) {
    //const KEP = getElementsByTagName("img")[0];
    //   document.images[0].addEventListener("mouseover",function(){
    //   egerEsemenyFel(this);
    // });
    KEPEK[0].addEventListener("mouseover", function () {
      egerEsemenyFel(this);
      console.log("katt");
    });
  }
}

function egerEsemenyFel(x) {
  //event.target.classList.add("kisebbkep");
  console.log("kép katt");

  x.style.height = "50%";
}
//function egerEsemenyLe(event) {
//  event.classList.remove("kisebbkep");
// }
