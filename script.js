import Lampa from "./Lampa.js";
const LAMPAK = $(".light");
let size = 3;
function fel() {
  for (let index = 1; index < size * size + 1; index++) {
    $("article").append('<div class="light le"></div>');
  }
  const LAMPAK = $(".light");

  /*console.log(LAMPAK)*/
  LAMPAK.on("click", function () {
    $(this).toggleClass("le");
    $(this).toggleClass("fel");
  });
}
function aLampa() {
  let aLampa = new Lampa(0);
}
$(function () {
  fel();
  aLampa();
});

//eRRE NINCS IS SZÜKSÉG, HASZNÁLJÁTOK HELYETTE A JQERY DOCUMENT REDY FÜGGVÉNYÉT $(FUNCTION()){}
