interface LavoratoreAutonomo {
  getUtileTasse(): number;
  getTasseInps(): number;
  getTasseIrpef(): number;
  getRedditoAnnuoLordo(): number;
}

abstract class LavoratoreAutonomoBase implements LavoratoreAutonomo {
  constructor(
    protected codredd: number,
    protected redditoannuolordo: number,
    protected tasseinps: number,
    protected tasseirpef: number
  ) {}

  abstract getUtileTasse(): number;

  getTasseInps(): number {
    return (this.tasseinps / 100) * this.redditoannuolordo;
  }

  getTasseIrpef(): number {
    return (this.tasseirpef / 100) * this.redditoannuolordo;
  }

  getRedditoAnnuoLordo(): number {
    return this.redditoannuolordo;
  }
}

class LavoratoreAutonomoIT extends LavoratoreAutonomoBase {
  constructor(
    codredd: number,
    redditoannuolordo: number,
    tasseinps: number,
    tasseirpef: number
  ) {
    super(codredd, redditoannuolordo, tasseinps, tasseirpef);
  }

  getUtileTasse(): number {
    return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
  }
}

// Funzione per gestire il click del pulsante "Calcola"
function calcolaTasse() {
  const codreddInput = document.getElementById("codredd") as HTMLInputElement;
  const redditoInput = document.getElementById("redditoannuolordo") as HTMLInputElement;
  const tasseInpsInput = document.getElementById("tasseinps") as HTMLInputElement;
  const tasseIrpefInput = document.getElementById("tasseirpef") as HTMLInputElement;
  const risultatoDiv = document.getElementById("risultato");

  // Verifica se l'elemento "risultatoDiv" esiste prima di utilizzarlo
  if (risultatoDiv) {
    const codredd = Number(codreddInput.value);
    const redditoannuolordo = Number(redditoInput.value);
    const tasseinps = Number(tasseInpsInput.value);
    const tasseirpef = Number(tasseIrpefInput.value);

    const lavoratore = new LavoratoreAutonomoIT(codredd, redditoannuolordo, tasseinps, tasseirpef);

    const utileTasse = lavoratore.getUtileTasse();
    const tasseInps = lavoratore.getTasseInps();
    const tasseIrpef = lavoratore.getTasseIrpef();
    const redditoLordo = lavoratore.getRedditoAnnuoLordo();

    risultatoDiv.innerHTML = `
      <p><strong>Reddito Annuo Lordo:</strong> ${redditoLordo}</p>
      <p><strong>Tasse INPS:</strong> ${tasseInps}</p>
      <p><strong>Tasse IRPEF:</strong> ${tasseIrpef}</p>
      <p><strong>Utile Tasse:</strong> ${utileTasse}</p>
    `;
  }
}