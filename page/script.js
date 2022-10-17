function getFilteredCars() {
  var fPrice = document.getElementById('fPrice').value;
  var tPrice = document.getElementById('tPrice').value;

  var colorDrpDwn = document.getElementById('Colour');
  var color = colorDrpDwn.options[colorDrpDwn.selectedIndex].text;

  var typesDrpDwn = document.getElementById('Types');

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

  var cars = [
    {
      car: 'Maruti S-Presso (Petrol)',
      colour: ['Red 🔴', 'Blue 🔵', 'Black ⚫', 'White ⚪'],
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 4.7,
    },
    {
      car: 'H City',
      colour: ['Red 🔴', 'Blue 🔵', 'Black ⚫'],
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 12,
    },
    {
      car: 'Maruti',
      colour: ['Red 🔴', 'Blue 🔵'],
      colr: '🔴 🔵 ⚫ ⚪',
      type: 'SUV',
      price: 18,
    }
    
  ];

  let resultCar = [];
  let resultPrice = [];
  let j = 0;
  let selectedCars = '';
  for (let i = 0; i < cars.length; i++) {
    let clr = 0;

    if (
      cars[i]['price'] >= fPrice &&
      cars[i]['price'] <= tPrice &&
      cars[i]['type'] == type
    ) {
      for (let k = 0; k < cars[i].colour.length; k++) {
        if (cars[i].colour[k] == color) {
          clr = 1;
        }
      }
      if (clr == 1) {
        resultCar[j] = cars[i]['car'];
        resultPrice[j] = cars[i]['price'] + ' lacs ' + ' | ' + cars[i].colr;
        j = j + 1;
      }
    }
  }

  for (let i = 0; i < resultCar.length - 1; i++) {
    selectedCars = selectedCars + resultCar[i] + ' : Rs. ' + resultPrice[i] + '\n';
  }
  selectedCars =
  selectedCars +
    resultCar[resultCar.length - 1] +
    ' : Rs. ' +
    resultPrice[resultCar.length - 1];

  document.querySelector('#demo').textContent = selectedCars;
}
