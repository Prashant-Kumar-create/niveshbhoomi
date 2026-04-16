# How to Add a New Blog Post — NiveshBhoomi

No coding knowledge needed. Follow these steps every time.

---

## Step 1 — Copy the template file

Go to your `blogs/` folder.
Find the file: `plot-loan-vs-home-loan.html`
Make a COPY of it (right-click → copy → paste).
Rename the copy using your blog title — use hyphens, no spaces, no capitals.

Good filename examples:
- `pmay-eligibility-guide.html`
- `lucknow-plot-buying-guide.html`
- `jaipur-investment-areas-2025.html`
- `home-loan-tax-benefits.html`

---

## Step 2 — Open the file in Notepad or VS Code

Right-click the file → Open with → Notepad (Windows) or TextEdit (Mac).

---

## Step 3 — Change the SEO section at the top

Find this block near the top (lines 6–10):

```
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<title>...</title>
```

Replace the content with your new blog's details.

Example for a Jaipur blog:
```
<meta name="description" content="Best areas to invest in real estate in Jaipur in 2025 — Mansarovar, Ajmer Road, Vaishali Nagar. Prices, ROI and loan options.">
<meta property="og:title" content="Jaipur Real Estate Investment Guide 2025">
<meta property="og:description" content="Where to buy property in Jaipur — areas, prices, returns and loan eligibility.">
<title>Jaipur Real Estate Investment Guide 2025 | NiveshBhoomi</title>
```

---

## Step 4 — Change the blog header

Find the block marked `<!-- ▼ CHANGE: Category, city, read time -->` and update:

```html
<span class="bm-cat">City Guide</span>          ← change category
<span class="bm-city">Jaipur</span>              ← change city
<span class="bm-read">9 min read</span>          ← estimate reading time
<span class="bm-date">Updated: June 2025</span>  ← today's date
```

Categories you can use: Plot Loans | City Guide | Home Loans | Govt Scheme | Project Review

---

## Step 5 — Change the title and subtitle

Find `<!-- ▼ CHANGE: Blog title -->` and update:

```html
<h1 class="blog-title">Jaipur real estate investment guide 2025</h1>
<p class="blog-subtitle">Where to buy, what to avoid, and how to finance your Jaipur property purchase.</p>
```

---

## Step 6 — Update the Table of Contents

Find the `<ol class="toc-list">` section and update the links and text to match your headings.

Each item looks like:
```html
<li><a href="#rates">Interest rates compared</a></li>
```

The `#rates` part must match the `id="rates"` on your H2 heading below.

---

## Step 7 — Write your blog content

Find the section between:
`<!-- ▼ MAIN CONTENT: Write your blog here ▼ -->`
and
`<!-- ▲ END MAIN CONTENT ▲ -->`

Replace ALL the content between these two comments with your new blog.

### HTML tags to use while writing:

**Paragraph:**
```html
<p>Your text here.</p>
```

**Heading (major section):**
```html
<h2 id="section-name">Your heading here</h2>
```
Note: The `id` must match your Table of Contents link.

**Sub-heading:**
```html
<h3>Your sub-heading</h3>
```

**Bullet list:**
```html
<ul>
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>
```

**Bold text inside a paragraph:**
```html
<p>This is a <strong>very important</strong> point.</p>
```

**Blue info box:**
```html
<div class="blog-callout callout-info">
  <div class="callout-icon">💡</div>
  <div><strong>Tip:</strong> Your tip text here.</div>
</div>
```

**Yellow warning box:**
```html
<div class="blog-callout callout-warn">
  <div class="callout-icon">⚠️</div>
  <div><strong>Warning:</strong> Your warning text here.</div>
</div>
```

**Green success box:**
```html
<div class="blog-callout callout-success">
  <div class="callout-icon">✓</div>
  <div>Your success/good news text here.</div>
</div>
```

**Comparison table:**
```html
<div class="blog-table-wrap">
  <table class="blog-table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Row 1, Col 1</td><td>Row 1, Col 2</td><td>Row 1, Col 3</td></tr>
      <tr><td>Row 2, Col 1</td><td>Row 2, Col 2</td><td>Row 2, Col 3</td></tr>
    </tbody>
  </table>
</div>
```

---

## Step 8 — Update the Related Posts in the sidebar

Find `<!-- Related posts -->` and update the 3 links to point to relevant blogs:

```html
<a href="your-other-blog.html" class="related-item">
  <div class="ri-cat">Category Name</div>
  <div class="ri-title">Title of the related blog</div>
</a>
```

---

## Step 9 — Add the blog to your homepage (index.html)

Open `index.html`. Find the `<div class="blog-grid">` section.
Copy one of the existing `<article class="blog-card">` blocks and update it:

```html
<article class="blog-card" data-cat="cities">
  <!--
    data-cat options:
    loans    → shows under "Home Loans" filter
    plots    → shows under "Plots & Land" filter
    cities   → shows under "City Guides" filter
    govt     → shows under "Govt Schemes" filter
  -->
  <div class="bc-img bc-amber">
    <!-- bc-green / bc-blue / bc-amber / bc-coral — pick one color -->
    <div class="bc-category">City Guide</div>
    <div class="bc-read">9 min read</div>
  </div>
  <div class="bc-body">
    <div class="bc-city">Jaipur</div>
    <h3 class="bc-title">Jaipur real estate investment guide 2025</h3>
    <p class="bc-desc">Short 2-line description of what the blog covers.</p>
    <a href="blogs/jaipur-investment-guide-2025.html" class="bc-link">Read guide →</a>
  </div>
</article>
```

---

## Step 10 — Upload to GitHub

1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Upload your new blog HTML file into the `blogs/` folder
4. Also upload the updated `index.html` (with the new card)
5. Click "Commit changes"

Your new blog is live in about 1 minute.

---

## Blog naming cheatsheet

| Blog type | Filename example | data-cat |
|---|---|---|
| Loan guide | `home-loan-for-nri.html` | `loans` |
| Plot guide | `yamuna-expressway-plots.html` | `plots` |
| City guide | `lucknow-investment-guide.html` | `cities` |
| Govt scheme | `pmay-2-eligibility.html` | `govt` |
| Project review | `review-xyz-residency-lucknow.html` | `cities` |

---

## Quick checklist before publishing

- [ ] SEO title and description updated (Step 3)
- [ ] Blog title and subtitle updated (Step 4–5)
- [ ] Table of contents matches your H2 headings (Step 6)
- [ ] All content replaced (Step 7)
- [ ] Related posts link to real pages (Step 8)
- [ ] New card added to index.html (Step 9)
- [ ] Files uploaded to GitHub (Step 10)

That's it. Each new blog takes about 30–45 minutes once you're used to it.
