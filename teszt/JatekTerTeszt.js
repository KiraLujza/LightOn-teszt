import Jatekter from "../Jatekter.js";



function tesztBalFelsoSarok() {

    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 0 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [true, true, false,
                true, true, false,
                false, false, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba"
  );
}
//tesztBalFelsoSarok()

function tesztJobbFelsoSarok(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 2 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, true, true,
              false, true, true,
              false, false, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
//tesztJobbFelsoSarok()

function tesztBallAlsoSarok(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 6 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, false, false,
              true, true, false,
              true, true, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
//tesztBallAlsoSarok()

function tesztJobbAlsoSarok(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 8 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, false, false,
              false, true, true,
              false, true, true];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}

//tesztJobbAlsoSarok()

function tesztKozep(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 4 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, true, false,
              true, false, true,
              false, true, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}

//tesztKozep()

function tesztFelsoKozep(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 1 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [true, true, true,
              false, false, false,
              false, false, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
//tesztFelsoKozep()

function tesztBallKozep(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 3 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [true, false, false,
             true, false, false,
             true, false, false];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
//tesztBallKozep()

function tesztJobbKozep(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 5 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, false, true,
             false, false, true,
             false, false, true];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
//tesztJobbKozep()

function tesztLentKozep(){
    const szuloElem = document.createElement("div");
    const jatekter = new Jatekter(szuloElem);
    console.log(jatekter)
    
  const e = new CustomEvent("kattint", { detail: 7 });
  window.dispatchEvent(e);

  console.log(jatekter.getLista());

  let vart = [false, false, false,
             false, false, false,
             true, true, true];
  let kapott = jatekter.getLista()

  console.assert(
    kapott.join() === vart.join(),
    "Hiba "
  );
}
tesztLentKozep()