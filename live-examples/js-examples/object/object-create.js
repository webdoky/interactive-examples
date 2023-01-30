const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`Мене звати ${this.name}. Чи я — людина? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Матвій'; // "name" — це властивість, означена на об'єкті "me", проте не на "person"
me.isHuman = true; // Успадковані властивості можна перезаписувати

me.printIntroduction();
// Очікуваний вивід: "Мене звати Матвій. Чи я — людина? true"
