let serviceQuality = 0;
let billAmountValue = 0;
let numPeopleValue = 0;

let resetButton = document.getElementById('resetButton');

let billAmount = document.getElementById('billAmount');
let numPeople = document.getElementById('numPeople');

let tipAmount = document.getElementById('tipAmountValue');
let totalBill = document.getElementById('totalBillValue');
let perPerson = document.getElementById('perPersonValue');

let qualityButtonPoor = document.getElementById('qualityPoor');
let qualityButtonAverage = document.getElementById('qualityAverage');
let qualityButtonExcellent = document.getElementById('qualityExcellent');

function setTip() {
  tipAmount.innerText = String((billAmountValue * serviceQuality).toFixed(2));
  totalBill.innerText = String(
    (billAmountValue + billAmountValue * serviceQuality).toFixed(2),
  );
  if (!(numPeopleValue > 0)) {
    numPeopleValue = 1;
  }
  perPerson.innerText = String(
    (
      (billAmountValue + billAmountValue * serviceQuality) /
      numPeopleValue
    ).toFixed(2),
  );
}

billAmount?.addEventListener('change', function () {
  billAmountValue = Number(billAmount.value);
  if (isNaN(billAmountValue)) {
    billAmount.style.backgroundColor = 'oklch(0.6412 0.2639 24.35 / 0.7)';
    billAmount.value = '';
    billAmount.placeholder = 'Please, input a valid amount ';
  } else {
    setTip();
  }
});

billAmount?.addEventListener('click', function () {
  billAmount.style.backgroundColor = 'inherit';
  billAmount.value = ' ';
});

numPeople?.addEventListener('change', function () {
  numPeopleValue = Number(numPeople.value);

  if (isNaN(numPeopleValue)) {
    numPeople.style.backgroundColor = 'oklch(0.6412 0.2639 24.35 / 0.7)';
    numPeople.value = '';
    numPeople.placeholder = 'Please, input a valid number ';
  } else {
    setTip();
  }
});

numPeople?.addEventListener('click', function () {
  numPeople.style.backgroundColor = 'inherit';
  numPeople.value = ' ';
});

resetButton?.addEventListener('click', function () {
  serviceQuality = 0;
  billAmount.value = ' ';
  numPeople.value = ' ';
  tipAmount.innerText = '0.00';
  totalBill.innerText = '0.00';
  perPerson.innerText = '0.00';
  serviceQuality = 0;
  billAmountValue = 0;
  numPeopleValue = 0;

  billAmount.style.backgroundColor = 'inherit';
  numPeople.style.backgroundColor = 'inherit';

  qualityButtonPoor?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonAverage?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonExcellent?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
});

qualityButtonPoor?.addEventListener('click', function () {
  serviceQuality = 0.02;
  qualityButtonPoor.classList.add('bg-tc-gradient-to', 'border-tc-emphasize');
  qualityButtonAverage?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonExcellent?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  setTip();
});

qualityButtonAverage?.addEventListener('click', function () {
  serviceQuality = 0.1;
  qualityButtonPoor?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonAverage.classList.add(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonExcellent?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  setTip();
});

qualityButtonExcellent?.addEventListener('click', function () {
  serviceQuality = 0.2;
  qualityButtonPoor?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonAverage?.classList.remove(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  qualityButtonExcellent.classList.add(
    'bg-tc-gradient-to',
    'border-tc-emphasize',
  );
  setTip();
});
