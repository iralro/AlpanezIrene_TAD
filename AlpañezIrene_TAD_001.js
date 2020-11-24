let Persona = function (nomEntrat, cognomEntrat){
  this.nom = nomEntrat;        
  this.cognom = cognomEntrat;   
};

Persona.prototype.saluda = function () { 
  console.log('Hola, em dic ' + this.nom + ' ' + this.cognom)
}

Persona.prototype.setNom = function (nomNou) {
  this.nom = nomNou;
}

Persona.prototype.setCognom = function (cognomNou) {
  this.cognom = cognomNou;
}

Persona.prototype.getNom = function () {
  return this.nom;
}

Persona.prototype.getCognom = function () {
  return this.cognom;
}

let treballador = new Persona("Irene", "Alpañez");

treballador.setNom("Irene");
treballador.setCognom("Alpañez");
console.log("El nom és : " + treballador.nom);
console.log("El cognom és : " + treballador.cognom);
treballador.saluda();
console.log("El nom (amb GET) és : " + treballador.getNom());
console.log("El cognom (amb GET) és : " + treballador.getCognom());
