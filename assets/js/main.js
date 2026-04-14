/* ── NiveshBhoomi · main.js ── */

/* FORMAT CURRENCY */
function fmt(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000)   return '₹' + (n / 100000).toFixed(1) + ' L';
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

/* EMI CALCULATOR — works on any page that has the calc HTML */
function calcEMI() {
  const amtEl    = document.getElementById('loan-amt');
  const rateEl   = document.getElementById('int-rate');
  const tenureEl = document.getElementById('tenure');
  if (!amtEl) return;

  const P = parseFloat(amtEl.value);
  const annualRate = parseFloat(rateEl.value);
  const years = parseInt(tenureEl.value);

  const amtDisp    = document.getElementById('amt-display');
  const rateDisp   = document.getElementById('rate-display');
  const tenureDisp = document.getElementById('tenure-display');
  if (amtDisp)    amtDisp.textContent    = fmt(P);
  if (rateDisp)   rateDisp.textContent   = annualRate.toFixed(2) + '%';
  if (tenureDisp) tenureDisp.textContent = years + ' year' + (years > 1 ? 's' : '');

  const r = annualRate / 12 / 100;
  const n = years * 12;
  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalPay = emi * n;
  const totalInt = totalPay - P;
  const intPct   = (totalInt / totalPay) * 100;

  const emiEl      = document.getElementById('emi-result');
  const totalIntEl = document.getElementById('total-int');
  const totalPayEl = document.getElementById('total-pay');
  const intRatioEl = document.getElementById('int-ratio');
  const barEl      = document.getElementById('emi-bar');

  if (emiEl)      emiEl.textContent      = '₹' + Math.round(emi).toLocaleString('en-IN');
  if (totalIntEl) totalIntEl.textContent = fmt(totalInt);
  if (totalPayEl) totalPayEl.textContent = fmt(totalPay);
  if (intRatioEl) intRatioEl.textContent = intPct.toFixed(1) + '%';
  if (barEl)      barEl.style.width      = (100 - intPct).toFixed(1) + '%';

  /* break-even year */
  let cumPrin = 0, cumInt = 0, bal = P, beYear = years;
  for (let m = 1; m <= n; m++) {
    const intPart  = bal * r;
    const prinPart = emi - intPart;
    cumInt  += intPart;
    cumPrin += prinPart;
    bal     -= prinPart;
    if (cumPrin >= cumInt && beYear === years) {
      beYear = Math.ceil(m / 12);
      break;
    }
  }
  const beEl = document.getElementById('break-yr');
  if (beEl) beEl.textContent = 'Yr ' + beYear;
}

/* SCROLL FADE-UP */
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
  }, 100);
}

/* FORM SUBMIT — uses FormSubmit.co */
function submitForm() {
  const name  = document.getElementById('f-name')  ? document.getElementById('f-name').value.trim()  : '';
  const phone = document.getElementById('f-phone') ? document.getElementById('f-phone').value.trim() : '';
  const loan  = document.getElementById('f-loan')  ? document.getElementById('f-loan').value          : '';

  /* basic validation */
  let valid = true;
  if (!name)  { document.getElementById('f-name').style.borderColor  = '#f87171'; valid = false; } else { document.getElementById('f-name').style.borderColor = ''; }
  if (!phone) { document.getElementById('f-phone').style.borderColor = '#f87171'; valid = false; } else { document.getElementById('f-phone').style.borderColor = ''; }
  if (!loan)  { document.getElementById('f-loan').style.borderColor  = '#f87171'; valid = false; } else { document.getElementById('f-loan').style.borderColor = ''; }
  if (!valid) return;

  /* submit the hidden HTML form to FormSubmit */
  const formEl = document.getElementById('formsubmit-form');
  if (formEl) {
    /* fill hidden fields */
    formEl.querySelector('[name="name"]').value    = name;
    formEl.querySelector('[name="phone"]').value   = phone;
    formEl.querySelector('[name="loan_type"]').value = loan;
    const amt  = document.getElementById('f-amount') ? document.getElementById('f-amount').value : '';
    const emp  = document.getElementById('f-emp')    ? document.getElementById('f-emp').value    : '';
    const city = document.getElementById('f-city')   ? document.getElementById('f-city').value   : '';
    formEl.querySelector('[name="loan_amount"]').value  = amt;
    formEl.querySelector('[name="employment"]').value   = emp;
    formEl.querySelector('[name="city"]').value         = city;
    formEl.submit();
  }
}

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  calcEMI();
  initScrollAnim();
});
