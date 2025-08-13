document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if (!height || height <= 0 || !weight || weight <= 0) {
    results.innerHTML = `<span style="color: red;">Please enter valid height and weight.</span>`;
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let category = '';
  let color = '';

  if (bmi < 18.6) {
    category = 'Underweight';
    color = '#f39c12';
  } else if (bmi < 25) {
    category = 'Normal';
    color = '#27ae60';
  } else {
    category = 'Overweight';
    color = '#c0392b';
  }

  results.innerHTML = `Your BMI is <span style="color: ${color};">${bmi} (${category})</span>`;
});
