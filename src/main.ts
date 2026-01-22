let serviceQuality  : number = 0;
let billAmountValue : number = 0;
let numPeopleValue  : number = 0;

let resetButton             = document.getElementById('resetButton');

let billAmount              = (document.getElementById('billAmount') as HTMLInputElement);
let numPeople               = (document.getElementById('numPeople') as HTMLInputElement);

let tipAmount               = document.getElementById('tipAmountValue'); 
let totalBill               = document.getElementById('totalBillValue');
let perPerson               = document.getElementById('perPersonValue');

let qualityButtonPoor       = document.getElementById('qualityPoor');
let qualityButtonAverage    = document.getElementById('qualityAverage');
let qualityButtonExcellent  = document.getElementById('qualityExcellent');

function setTip() {
  tipAmount!.innerText = String((billAmountValue * serviceQuality).toFixed(2));
  totalBill!.innerText = String((billAmountValue + billAmountValue * serviceQuality).toFixed(2));
  if (!(numPeopleValue > 0)) {numPeopleValue = 1}
  perPerson!.innerText = String(((billAmountValue + billAmountValue * serviceQuality) / numPeopleValue).toFixed(2));

}

billAmount?.addEventListener('change', function() {
    billAmountValue = Number(billAmount.value);
    setTip();
});

numPeople?.addEventListener('change', function() {
    numPeopleValue = Number(numPeople.value);
    setTip();
});

resetButton?.addEventListener('click', function() {
  serviceQuality = 0;
  billAmount.value = " ";
  numPeople.value = " ";
  tipAmount!.innerText = "0.00";
  totalBill!.innerText = "0.00";
  perPerson!.innerText = "0.00";
  serviceQuality = 0;
  billAmountValue  = 0;
  numPeopleValue   = 0;


  qualityButtonPoor?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonAverage?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonExcellent?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
});

qualityButtonPoor?.addEventListener('click', function() {
  serviceQuality = 0.02;
  qualityButtonPoor.classList.add("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonAverage?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonExcellent?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  setTip();

});

qualityButtonAverage?.addEventListener('click', function() {
  serviceQuality = 0.10;
  qualityButtonPoor?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonAverage.classList.add("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonExcellent?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  setTip();
});

qualityButtonExcellent?.addEventListener('click', function() {
  serviceQuality = 0.20;
  qualityButtonPoor?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonAverage?.classList.remove("bg-tc-gradient-to", "border-tc-emphasize");
  qualityButtonExcellent.classList.add("bg-tc-gradient-to", "border-tc-emphasize");
  setTip();
});

