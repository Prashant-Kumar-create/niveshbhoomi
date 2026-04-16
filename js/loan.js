// EMI Calculator for loan page
function calcEMI() {
  const P = parseFloat(document.getElementById('loanAmt').value) * 100000;
  const annualRate = parseFloat(document.getElementById('rate').value);
  const years = parseInt(document.getElementById('tenure').value);
  const r = annualRate / 12 / 100;
  const n = years * 12;
  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalPay = emi * n;
  const totalInt = totalPay - P;

  document.getElementById('emi').textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('totalInt').textContent = '₹' + (totalInt / 100000).toFixed(1) + 'L';
  document.getElementById('totalPay').textContent = '₹' + (totalPay / 100000).toFixed(1) + 'L';
  document.getElementById('loanAmtVal').textContent = '₹' + parseFloat(document.getElementById('loanAmt').value) + 'L';
  document.getElementById('rateVal').textContent = parseFloat(document.getElementById('rate').value).toFixed(1) + '%';
  document.getElementById('tenureVal').textContent = years + ' yrs';
}
['loanAmt','rate','tenure'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', calcEMI);
});
calcEMI();

// Loan form submission
function handleLoanSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('loanBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const note = document.getElementById('lnote').value;
  const prop = document.querySelector('input[name="prop"]:checked').value;

  const msg = `*Loan Application — NiveshBhoomi*%0A%0A`
    + `Name: ${document.getElementById('lname').value}%0A`
    + `Phone: ${document.getElementById('lphone').value}%0A`
    + `Email: ${document.getElementById('lemail').value || 'Not given'}%0A`
    + `City: ${document.getElementById('lcity').value}%0A`
    + `Loan type: ${document.getElementById('lloantype').value}%0A`
    + `Amount needed: ${document.getElementById('llamount').value}%0A`
    + `Employment: ${document.getElementById('lemploy').value}%0A`
    + `Monthly income: ${document.getElementById('lincome').value}%0A`
    + `Property status: ${prop}%0A`
    + (note ? `Note: ${note}` : '');

  setTimeout(() => {
    document.getElementById('loanSuccess').style.display = 'block';
    btn.style.display = 'none';
    // Replace with your actual number
    window.open('https://wa.me/918130521740?text=' + msg, '_blank');
  }, 600);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.lt-card, .step-card, .faq-item, .bank-pill').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
