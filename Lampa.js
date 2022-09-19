class Lampa {
  constructor() {
    $("article").append('<div class="light le"></div>');

    this.tarolo = $(".light:last-child");
    this.tarolo.on("click", () => {
      this.tarolo.toggleClass("le");
      this.tarolo.toggleClass("fel");
    });

    // this.allapot;
    // // $(".light")[pozi]
    // // const ELEM = console.log(this);
    // tarolo = $(".light")[pozi];
    // if (condition) {
    // }
    // this.termElem = $(".light")[pozi];
    // console.log(this.termElem);
  }
}
export default Lampa;
