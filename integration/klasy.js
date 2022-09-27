class Obliczenia {
    get tekst () {
        return "Twoje obliczenie to:"
    }
    
    get komunikat() {
    }
    return "Twoja liczba jest mniejsza od 10!"

dodawanie() {
 return 2+6   
}

mnożenie () {
    return 4*5
}
koncowyRezultat(koncowaWartosc) {
console.log(this.tekst + " " + koncowaWartosc)
if (koncowaWartosc) < 10) {
    console.log (this.komunikat)
}
}
}
const wykonajObliczenie  = new Obliczenia(); 
console.log(wykonajObliczenie.oncowyRezultat(wykonajObliczenie.dodawanie()))
