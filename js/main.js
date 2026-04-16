// ── NAV SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── BLOG FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    blogCards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

// ── EMI CALCULATOR ──
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

  const loanL = parseFloat(document.getElementById('loanAmt').value);
  document.getElementById('loanAmtVal').textContent = '₹' + loanL + 'L';
  document.getElementById('rateVal').textContent = parseFloat(document.getElementById('rate').value).toFixed(1) + '%';
  document.getElementById('tenureVal').textContent = years + ' yrs';
}

document.getElementById('loanAmt').addEventListener('input', calcEMI);
document.getElementById('rate').addEventListener('input', calcEMI);
document.getElementById('tenure').addEventListener('input', calcEMI);
calcEMI();

// ── LEAD FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('formBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Collect form data
  const data = {
    name: document.getElementById('fname').value,
    phone: document.getElementById('fphone').value,
    city: document.getElementById('fcity').value,
    type: document.getElementById('ftype').value,
    budget: document.getElementById('fbudget').value,
    loan: document.querySelector('input[name="loan"]:checked').value
  };

  // Build WhatsApp message
  const msg = `Hi NiveshBhoomi!%0A%0AName: ${data.name}%0APhone: ${data.phone}%0ACity: ${data.city}%0AProperty: ${data.type}%0ABudget: ${data.budget}%0ALoan needed: ${data.loan}`;

  // Show success, then open WhatsApp
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'block';
    btn.style.display = 'none';
    // Opens WhatsApp — replace 91XXXXXXXXXX with your actual number
    window.open('https://wa.me/918130521740?text=' + msg, '_blank');
  }, 600);
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card, .city-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
