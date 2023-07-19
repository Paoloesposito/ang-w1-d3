var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomoBase = /** @class */ (function () {
    function LavoratoreAutonomoBase(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    LavoratoreAutonomoBase.prototype.getTasseInps = function () {
        return (this.tasseinps / 100) * this.redditoannuolordo;
    };
    LavoratoreAutonomoBase.prototype.getTasseIrpef = function () {
        return (this.tasseirpef / 100) * this.redditoannuolordo;
    };
    LavoratoreAutonomoBase.prototype.getRedditoAnnuoLordo = function () {
        return this.redditoannuolordo;
    };
    return LavoratoreAutonomoBase;
}());
var LavoratoreAutonomoIT = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoIT, _super);
    function LavoratoreAutonomoIT(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, codredd, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    LavoratoreAutonomoIT.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    };
    return LavoratoreAutonomoIT;
}(LavoratoreAutonomoBase));
// Funzione per gestire il click del pulsante "Calcola"
function calcolaTasse() {
    var codreddInput = document.getElementById("codredd");
    var redditoInput = document.getElementById("redditoannuolordo");
    var tasseInpsInput = document.getElementById("tasseinps");
    var tasseIrpefInput = document.getElementById("tasseirpef");
    var risultatoDiv = document.getElementById("risultato");
    // Verifica se l'elemento "risultatoDiv" esiste prima di utilizzarlo
    if (risultatoDiv) {
        var codredd = Number(codreddInput.value);
        var redditoannuolordo = Number(redditoInput.value);
        var tasseinps = Number(tasseInpsInput.value);
        var tasseirpef = Number(tasseIrpefInput.value);
        var lavoratore = new LavoratoreAutonomoIT(codredd, redditoannuolordo, tasseinps, tasseirpef);
        var utileTasse = lavoratore.getUtileTasse();
        var tasseInps = lavoratore.getTasseInps();
        var tasseIrpef = lavoratore.getTasseIrpef();
        var redditoLordo = lavoratore.getRedditoAnnuoLordo();
        risultatoDiv.innerHTML = "\n      <p><strong>Reddito Annuo Lordo:</strong> ".concat(redditoLordo, "</p>\n      <p><strong>Tasse INPS:</strong> ").concat(tasseInps, "</p>\n      <p><strong>Tasse IRPEF:</strong> ").concat(tasseIrpef, "</p>\n      <p><strong>Utile Tasse:</strong> ").concat(utileTasse, "</p>\n    ");
    }
}
