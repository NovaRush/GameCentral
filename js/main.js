:root {
  --bg: #0d1117;
  --bg-alt: #111827;
  --panel: #141b24;
  --panel-strong: #1a2330;
  --card: rgba(17, 24, 39, 0.9);
  --card-border: rgba(196, 214, 204, 0.1);
  --text: #ebf5ef;
  --muted: #b5c6bf;
  --accent: #36d399;
  --accent-strong: #1fbf75;
  --accent-soft: rgba(54, 211, 153, 0.14);
  --shadow: rgba(0, 0, 0, 0.24);
  --input: #0f1720;
  --danger: #fca5a5;
  --success: #9ae6b4;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #0d1117 0%, #101821 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.section {
  padding: 88px 0;
}

.soft-section {
  background: rgba(17, 24, 39, 0.55);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7, 10, 15, 0.85);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent) 0%, #6ee7b7 100%);
  color: #08110c;
  border-radius: 12px;
  font-size: 0.82rem;
  box-shadow: 0 12px 30px rgba(54, 211, 153, 0.25);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  color: var(--muted);
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 8px;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  margin: 5px auto;
  border-radius: 999px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero {
  padding: 92px 0 72px;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 44px;
  align-items: center;
}

.hero-copy h1,
.page-hero h1,
.section-heading h2,
.two-col h2,
.center h2,
.contact-info h2,
.policy-card h2 {
  letter-spacing: -0.05em;
  line-height: 1.08;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 5rem);
  max-width: 12ch;
}

.text-link {
  color: var(--accent);
  font-weight: 600;
}

.lead {
  max-width: 60ch;
  color: var(--muted);
  font-size: 1.06rem;
  margin: 22px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, #6ee7b7 100%);
  color: #08110c;
  box-shadow: 0 16px 35px rgba(54, 211, 153, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--text);
}

.stat-list {
  list-style: none;
  padding: 0;
  margin: 34px 0 0;
  display: flex;
  gap: 34px;
  flex-wrap: wrap;
}

.stat-list li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-list strong {
  font-size: 1.6rem;
  letter-spacing: -0.04em;
}

.stat-list span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  min-height: 420px;
}

.visual-card {
  position: absolute;
  background: linear-gradient(180deg, rgba(25, 35, 48, 0.94), rgba(17, 24, 39, 0.94));
  border: 1px solid var(--card-border);
  border-radius: 26px;
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
}

.card-large {
  inset: 28px 30px 30px 52px;
  padding: 28px 26px;
}

.card-small {
  width: 180px;
  right: 0;
  bottom: 10px;
  padding: 22px 18px;
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.82rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.badge-green {
  background: rgba(54, 211, 153, 0.12);
  color: var(--accent);
}

.badge-dark {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
}

.visual-card h2,
.visual-card h3 {
  margin: 18px 0 12px;
  letter-spacing: -0.04em;
}

.visual-card h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.visual-card p {
  margin: 0;
  color: var(--muted);
}

.mini-stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
}

.mini-stat strong {
  color: var(--text);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.center {
  text-align: center;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.card-grid-featured {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.article-card {
  background: linear-gradient(180deg, rgba(20, 27, 36, 0.96), rgba(14, 18, 26, 0.96));
  border: 1px solid var(--card-border);
  border-radius: 22px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: rgba(54, 211, 153, 0.25);
}

.article-card img {
  width: 100%;
  height: 215px;
  object-fit: cover;
}

.article-body {
  padding: 22px 20px 18px;
}

.meta-row-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  color: var(--muted);
  font-size: 0.8rem;
}

.category-pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: rgba(54, 211, 153, 0.08);
  color: var(--accent);
  border: 1px solid rgba(54, 211, 153, 0.12);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.article-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.article-card p {
  margin: 0;
  color: var(--muted);
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.84rem;
}

.read-link {
  color: var(--accent);
  font-weight: 600;
}

.values {
  padding-top: 0;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 26px;
}

.value-grid article,
.info-card,
.policy-card,
.contact-form,
.contact-info {
  background: linear-gradient(180deg, rgba(20, 27, 36, 0.96), rgba(12, 17, 23, 0.96));
  border: 1px solid var(--card-border);
  border-radius: 22px;
  padding: 28px 24px;
}

.value-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(54, 211, 153, 0.12);
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 18px;
}

.value-grid h3,
.info-card h3,
.contact-details div span {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.value-grid p,
.info-card li,
.contact-info p,
.contact-details p,
.policy-card p,
.policy-card li {
  color: var(--muted);
}

.page-hero {
  padding: 92px 0 40px;
}

.narrow-hero {
  padding-top: 68px;
}

.page-hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 4rem);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}

.search-box {
  flex: 1;
  min-width: min(320px, 100%);
}

.search-box input {
  width: 100%;
  min-height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--input);
  color: var(--text);
  padding: 0 16px;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.category-btn {
  min-height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  font-weight: 600;
}

.category-btn.active {
  background: rgba(54, 211, 153, 0.12);
  border-color: rgba(54, 211, 153, 0.2);
  color: var(--accent);
}

.two-col,
.contact-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  align-items: start;
}

.info-card ul {
  margin: 0;
  padding-left: 18px;
}

.policy-wrap {
  max-width: 820px;
}

.policy-card h2 {
  margin: 28px 0 10px;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.policy-card h2:first-child {
  margin-top: 0;
}

.contact-details {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

.contact-details a {
  color: var(--accent);
}

.contact-form {
  display: grid;
  gap: 18px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--input);
  color: var(--text);
  padding: 14px 14px;
}

.form-status {
  min-height: 24px;
  margin: 0;
  color: var(--success);
}

.article-shell {
  padding: 52px 0 82px;
}

.article-hero {
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid var(--card-border);
  background: linear-gradient(180deg, rgba(20, 27, 36, 0.9), rgba(12, 17, 23, 0.9));
  margin-bottom: 28px;
}

.article-hero img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.article-meta {
  padding: 26px 28px 12px;
}

.article-meta h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4rem);
  letter-spacing: -0.05em;
}

.article-summary {
  padding: 0 28px 28px;
  color: var(--muted);
  font-size: 1.08rem;
}

.article-content {
  max-width: 760px;
  margin: 0 auto;
}

.article-content p,
.article-content li {
  color: var(--muted);
  font-size: 1.02rem;
}

.article-content h2,
.article-content h3 {
  letter-spacing: -0.04em;
  margin: 34px 0 14px;
}

.article-content ul,
.article-content ol {
  padding-left: 22px;
}

.back-link {
  display: inline-flex;
  margin: 24px 0 0;
  color: var(--accent);
  font-weight: 600;
}

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(10, 14, 19, 0.94);
  padding: 42px 0 10px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 0.8fr;
  gap: 22px;
  align-items: start;
}

.footer-copy {
  margin-top: 16px;
  color: var(--muted);
  max-width: 420px;
}

.site-footer h3 {
  margin-top: 0;
  margin-bottom: 14px;
  font-size: 1.05rem;
}

.site-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.footer-bottom {
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
  font-size: 0.9rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .hero-layout,
  .two-col,
  .contact-layout,
  .footer-grid,
  .card-grid,
  .card-grid-featured,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 68px;
  }

  .main-nav {
    position: absolute;
    top: 76px;
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(10, 14, 19, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 18px 16px;
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.28);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }
}

@media (max-width: 560px) {
  .field-grid {
    grid-template-columns: 1fr;
  }

  .card-large {
    inset: 14px 20px 28px 18px;
  }

  .card-small {
    width: 150px;
  }

  .hero-copy h1 {
    max-width: none;
  }
}






































































"},{