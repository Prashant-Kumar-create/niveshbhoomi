# NiveshBhoomi — niveshbhoomi.in

Real estate finance advisory & home loan lead generation site for Delhi NCR.

---

## Folder Structure

```
niveshbhoomi/
├── index.html                        ← Homepage
├── thankyou.html                     ← Form submission redirect
├── sitemap.xml                       ← Submit to Google Search Console
├── robots.txt
├── assets/
│   ├── css/main.css                  ← All shared styles
│   └── js/main.js                    ← EMI calculator + animations + form
├── blog/
│   ├── index.html                    ← Blog listing page
│   ├── home-loan-delhi-ncr-guide.html
│   ├── lap-self-employed-guide.html
│   └── cibil-680-home-loan.html
└── tools/
    └── emi-calculator.html           ← Standalone EMI tool page
```

---

## ⚙️ SETUP: FormSubmit (form submissions → your email)

### Step 1 — Update your email in index.html

Open `index.html`. Find this line near the bottom:

```html
<form id="formsubmit-form" action="https://formsubmit.co/YOUR@EMAIL.COM" method="POST" ...>
```

Replace `YOUR@EMAIL.COM` with your actual email address.

### Step 2 — Activate FormSubmit

The first time someone submits the form, FormSubmit will send a confirmation email to your address.
Click the link in that email to activate. After that, every submission lands in your inbox.

### Step 3 — What you receive

Each submission sends you a formatted email table:

| Field        | Value                    |
|-------------|--------------------------|
| Name         | Amit Sharma              |
| Phone        | +91 98765 43210          |
| Loan Type    | Home Loan — New Purchase |
| Loan Amount  | ₹50L – ₹1Cr             |
| Employment   | Salaried — Private       |
| City         | Noida                    |

### Step 4 — Where submissions are stored

FormSubmit (free plan) does NOT store submissions. They arrive by email only.

**To store all leads in a spreadsheet:**
1. Go to formsubmit.co → upgrade to paid (optional), OR
2. Use **Google Sheets + Apps Script** to log emails, OR  
3. Use **Netlify Forms** (100 free/month) if you move hosting to Netlify.

**Recommended free solution — Netlify Forms:**
- Move hosting from GitHub Pages to Netlify (free, 5 minutes)
- Replace `action="https://formsubmit.co/..."` with `netlify` attribute
- All submissions appear in your Netlify dashboard with history

---

## ✍️ How to add a new blog post

1. Copy `blog/home-loan-delhi-ncr-guide.html`
2. Rename it to something like `blog/home-loan-balance-transfer.html`
3. Update the 4 SEO lines at the top (title, description, keywords, canonical)
4. Write your content between the `WRITE YOUR CONTENT HERE` comments
5. Add a link to it in `blog/index.html` (copy an existing `<a class="post-item">` block)
6. Add it to `sitemap.xml`
7. `git add . && git commit -m "new post: balance transfer guide" && git push`

That's it — live in 60 seconds.

---

## 🔑 One-time setup checklist

- [ ] Replace `YOUR@EMAIL.COM` in index.html
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Verify site in Google Search Console
- [ ] Set up Google Analytics (add GA4 tag to `<head>` of all pages)
- [ ] Test form submission once after deployment
- [ ] Update rates in ticker every month

---

## 📊 Monthly maintenance (15 minutes)

1. Update bank rates in the ticker (index.html, search for `tick-val`)
2. Check Google Search Console for new keyword rankings
3. Reply to any form leads that came in
4. Write one new blog post

---

## 🚀 To deploy on GitHub Pages

```bash
git init
git add .
git commit -m "initial site"
git remote add origin https://github.com/YOURUSERNAME/niveshbhoomi.in.git
git push -u origin main
```

Then: GitHub repo → Settings → Pages → Source: `main` branch, `/ (root)`

Your site will be live at `https://YOURUSERNAME.github.io/niveshbhoomi.in/`
with your custom domain `niveshbhoomi.in` pointing to it via CNAME.
