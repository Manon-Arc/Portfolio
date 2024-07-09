const texteComplet: string = "Développeuse informatique";
const vitesseEcriture: number = 110;
const vitesseEffacement: number = 50;
const pauseAvantEffacement: number = 1200;

let IsRunning: boolean = false;

export function ecrireTexte(): void {
  if (IsRunning) {
    return;
  }
  IsRunning = true;
  let index: number = 0;
  const intervalEcriture = setInterval(function() {
    const texteActuel: string | null = document.getElementById("animation_machine")!.textContent;
    if (texteActuel !== null) {
      document.getElementById("animation_machine")!.textContent = texteActuel + texteComplet.charAt(index);
      index++;
      if (index >= texteComplet.length) {
        clearInterval(intervalEcriture);
        setTimeout(function() {
          effacerTexte();
        }, pauseAvantEffacement);
      }
    }
  }, vitesseEcriture);
}

function effacerTexte(): void {
  let index: number = texteComplet.length - 1;
  const intervalEffacement = setInterval(function() {
    const texteActuel: string | null = document.getElementById("animation_machine")!.textContent;
    if (texteActuel !== null) {
      document.getElementById("animation_machine")!.textContent = texteActuel.slice(0, index);
      index--;
      if (index < 0) {
        clearInterval(intervalEffacement);
        setTimeout(function() {
          IsRunning = false;
          ecrireTexte();
        }, pauseAvantEffacement);
      }
    }
  }, vitesseEffacement);
}

window.onload = function() {
  ecrireTexte();
};
