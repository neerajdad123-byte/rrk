/* RRK Chicken — shared data, cart & WhatsApp helpers */
window.RRK = {
  phone: "+919999999999",
  whatsapp: "919999999999",
  community: "https://chat.whatsapp.com/REPLACE_WITH_INVITE",
  adminPassword: "rrk2026",
  craftThreshold: 1000,
};

window.RRK_IMAGES = {
  hero: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=2400&q=92",
  special: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_65.jpg?width=1200",
  curry: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_curry.jpg?width=1200",
  biryani: "https://commons.wikimedia.org/wiki/Special:FilePath/Biryani.JPG?width=1200",
  grill: "https://commons.wikimedia.org/wiki/Special:FilePath/Tandoori_chicken.jpg?width=1200",
  starter: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_65.jpg?width=1200",
  bucket: "https://commons.wikimedia.org/wiki/Special:FilePath/Fried_chicken.jpg?width=1200",
  raw: "https://commons.wikimedia.org/wiki/Special:FilePath/Raw_chicken.jpg?width=1200",
};

window.RRK_DEFAULT = {
  special: {
    name: "Guntur Chilli Chicken",
    desc: "Crisp-fried chicken tossed in fiery Guntur chillies, curry leaves and house masala.",
    price: 249,
    oldPrice: 299,
    image: RRK_IMAGES.special,
  },
  festivalOffers: [
    { title: "Ugadi Feast", desc: "10% off party buckets above ₹1500", active: true },
    { title: "Weekend Special", desc: "Free raita on biryani orders", active: true },
  ],
  birthdayOffers: [
    { title: "Birthday Treat", desc: "Free starter on orders above ₹800 — show ID at pickup", active: true },
  ],
  menu: [
    { id: "m1", category: "Starters", name: "Chicken 65", price: 199, desc: "Crispy Andhra-style fry with curry leaves", image: RRK_IMAGES.starter, veg: false, spice: 3 },
    { id: "m2", category: "Starters", name: "RRK Wings", price: 229, desc: "Smoky grilled wings, house rub", image: RRK_IMAGES.grill, veg: false, spice: 2 },
    { id: "m3", category: "Starters", name: "Pepper Fry", price: 219, desc: "Black pepper and garlic finish", image: RRK_IMAGES.starter, veg: false, spice: 2 },
    { id: "m4", category: "Curries", name: "Red Curry Plate", price: 280, desc: "RRK red masala, naan, onion & lime", image: RRK_IMAGES.curry, veg: false, spice: 3 },
    { id: "m5", category: "Curries", name: "Butter Chicken", price: 320, desc: "Creamy tomato gravy, soft pieces", image: RRK_IMAGES.curry, veg: false, spice: 1 },
    { id: "m6", category: "Curries", name: "Kadai Chicken", price: 290, desc: "Capsicum, onion, bold masala", image: RRK_IMAGES.curry, veg: false, spice: 2 },
    { id: "m7", category: "Biryani", name: "RRK Chicken Biryani", price: 249, desc: "Long-grain rice, saffron, raita", image: RRK_IMAGES.biryani, veg: false, spice: 2 },
    { id: "m8", category: "Biryani", name: "Family Biryani", price: 699, desc: "Serves 3–4, extra raita", image: RRK_IMAGES.biryani, veg: false, spice: 2 },
    { id: "m9", category: "Grill", name: "Tandoori Half", price: 349, desc: "Charred, lemon, mint chutney", image: RRK_IMAGES.grill, veg: false, spice: 2 },
    { id: "m10", category: "Grill", name: "Grill Cuts Plate", price: 350, desc: "Mixed grill with naan", image: RRK_IMAGES.grill, veg: false, spice: 2 },
    { id: "m11", category: "Buckets", name: "Party Bucket", price: 899, desc: "Chicken, rice, naan & sides for 4", image: RRK_IMAGES.bucket, veg: false, spice: 2 },
    { id: "m12", category: "Buckets", name: "Office Box (6)", price: 1299, desc: "Six rice boxes, gravy & starter", image: RRK_IMAGES.bucket, veg: false, spice: 2 },
    { id: "m13", category: "Rice Boxes", name: "Lunch Rice Box", price: 220, desc: "Gravy, rice, herbs — takeaway ready", image: RRK_IMAGES.biryani, veg: false, spice: 1 },
    { id: "m14", category: "Rice Boxes", name: "Meals Combo", price: 180, desc: "Rice, dal, chicken curry portion", image: RRK_IMAGES.curry, veg: false, spice: 1 },
  ],
  rawChicken: [
    { id: "r1", name: "Whole Bird", unit: "per kg", price: 220, desc: "Skin on or off" },
    { id: "r2", name: "Curry Cut", unit: "per kg", price: 240, desc: "Small or medium pieces" },
    { id: "r3", name: "Boneless", unit: "per kg", price: 320, desc: "Cubes or strips" },
    { id: "r4", name: "Lollipop", unit: "per kg", price: 340, desc: "Party-ready cuts" },
    { id: "r5", name: "Skinless Breast", unit: "per kg", price: 360, desc: "Lean, cleaned" },
    { id: "r6", name: "Mince (Keema)", unit: "per kg", price: 300, desc: "Fresh ground" },
  ],
  craftCombos: [
    { id: "c1", name: "Couple Feast", price: 599, guests: 2, items: ["Chicken 65", "Red Curry Plate", "2 Rice Boxes"] },
    { id: "c2", name: "Family Spread", price: 1299, guests: 4, items: ["Party Bucket", "Biryani", "Wings"] },
    { id: "c3", name: "Office Lunch", price: 1499, guests: 6, items: ["Office Box (6)", "Pepper Fry", "Raita"] },
  ],
  craftOffers: [
    { minGuests: 4, minItems: 3, discount: 5, message: "5% off for groups of 4+" },
    { minGuests: 6, minItems: 4, discount: 10, message: "10% off + free starter for 6+" },
    { minGuests: 10, minItems: 5, discount: 15, message: "15% off party orders for 10+" },
  ],
  orders: [],
};

function rrkLoadData() {
  try {
    const stored = JSON.parse(localStorage.getItem("rrk_data"));
    if (!stored) return structuredClone(RRK_DEFAULT);
    return { ...structuredClone(RRK_DEFAULT), ...stored,
      menu: stored.menu?.length ? stored.menu : RRK_DEFAULT.menu,
      rawChicken: stored.rawChicken?.length ? stored.rawChicken : RRK_DEFAULT.rawChicken,
      craftCombos: stored.craftCombos?.length ? stored.craftCombos : RRK_DEFAULT.craftCombos,
    };
  } catch { return structuredClone(RRK_DEFAULT); }
}

function rrkSaveData(data) {
  localStorage.setItem("rrk_data", JSON.stringify(data));
}

function rrkApplySettings(data) {
  if (data.settings) {
    if (data.settings.phone) RRK.phone = data.settings.phone;
    if (data.settings.whatsapp) RRK.whatsapp = data.settings.whatsapp;
    if (data.settings.community) RRK.community = data.settings.community;
    if (data.settings.adminPassword) RRK.adminPassword = data.settings.adminPassword;
  }
}

function rrkWaLink(text) {
  return `https://wa.me/${RRK.whatsapp}?text=${encodeURIComponent(text)}`;
}

function rrkFormatRs(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function rrkSpiceHtml(level) {
  let h = '<span class="spice">';
  for (let i = 1; i <= 3; i++) h += `<i data-lucide="flame" class="${i <= level ? "on" : ""}"></i>`;
  return h + "</span>";
}

function rrkCartKey(page) { return `rrk_cart_${page}`; }

function rrkGetCart(page) {
  try { return JSON.parse(sessionStorage.getItem(rrkCartKey(page))) || []; }
  catch { return []; }
}

function rrkSetCart(page, cart) {
  sessionStorage.setItem(rrkCartKey(page), JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent("rrk:cart", { detail: { page, cart } }));
}

function rrkCartTotal(cart) {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function rrkCartCount(cart) {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function rrkLogOrder(type, payload) {
  const data = rrkLoadData();
  data.orders = data.orders || [];
  data.orders.unshift({ id: Date.now(), type, ...payload, at: new Date().toISOString() });
  if (data.orders.length > 200) data.orders.length = 200;
  rrkSaveData(data);
}

function rrkToast(msg) {
  let t = document.getElementById("rrkToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "rrkToast";
    t.className = "toast";
    t.innerHTML = '<i data-lucide="check-circle"></i><span></span>';
    document.body.appendChild(t);
  }
  t.querySelector("span").textContent = msg;
  t.classList.add("is-on");
  if (window.lucide) lucide.createIcons();
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove("is-on"), 2800);
}

function rrkInitPage(activeNav) {
  const data = rrkLoadData();
  rrkApplySettings(data);
  if (activeNav) {
    document.querySelectorAll(`.nav__links a[href="${activeNav}"]`).forEach((a) => a.classList.add("is-active"));
  }
  if (window.lucide) lucide.createIcons();

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    document.getElementById("loader")?.remove();
    document.querySelectorAll(".reveal").forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
    return;
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const loader = document.getElementById("loader");
    if (loader) {
      gsap.timeline({ onComplete: () => gsap.to(loader, { yPercent: -100, duration: 0.8, ease: "power4.inOut", onComplete: () => loader.remove() }) })
        .fromTo(".loader__title", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to({}, { duration: 0.4 });
    }
    gsap.to("#progress", { width: "100%", ease: "none", scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 } });
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
    });
  } else {
    document.getElementById("loader")?.remove();
  }
}

function rrkFooterHtml() {
  return `
  <footer class="footer">
    <div class="marquee" aria-hidden="true"><div class="marquee__track">
      <span>RRK Chicken</span><span class="solid">Eluru</span><span>Red Hot</span><span class="solid">Fresh Daily</span>
      <span>RRK Chicken</span><span class="solid">Eluru</span><span>Red Hot</span><span class="solid">Fresh Daily</span>
    </div></div>
    <div class="footer__grid">
      <div class="footer__brand">
        <a class="brand" href="index.html"><span class="brand__mark">RRK</span><span class="brand__text">RRK Chicken<small>Eluru · Est. 2019</small></span></a>
        <p>Red-hot plates, honest portions and fresh cuts — cooked in Eluru every day.</p>
      </div>
      <div><h5>Order</h5><ul>
        <li><a href="menu.html">Full Menu</a></li>
        <li><a href="craft.html">Craft My Plate</a></li>
        <li><a href="raw.html">Raw Chicken</a></li>
        <li><a href="index.html#special">Today's Special</a></li>
      </ul></div>
      <div><h5>Contact</h5><ul class="footer__contact">
        <li><i data-lucide="map-pin"></i><span>RRK Chicken, Main Road, Eluru, AP 534001</span></li>
        <li><i data-lucide="phone"></i><span>${RRK.phone.replace("+91", "+91 ")}</span></li>
        <li><i data-lucide="clock"></i><span>Open daily, 11 AM — 11 PM</span></li>
      </ul></div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 RRK Chicken, Eluru</span>
      <a href="admin.html">Staff Login</a>
      <a href="${RRK.community}" target="_blank" rel="noreferrer">WhatsApp Community</a>
    </div>
  </footer>`;
}

function rrkNavHtml(active, showCart, cartPage) {
  const cartBtn = showCart ? `<button class="nav__cart" id="openCart" type="button"><i data-lucide="shopping-bag"></i>Cart <span class="nav__cart-count" id="navCartCount">0</span></button>` : "";
  return `
  <header class="nav">
    <a class="brand" href="index.html"><span class="brand__mark">RRK</span><span class="brand__text">RRK Chicken<small>Eluru · Est. 2019</small></span></a>
    <nav><ul class="nav__links">
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="craft.html">Craft My Plate</a></li>
      <li><a href="raw.html">Raw Chicken</a></li>
    </ul></nav>
    ${cartBtn}
  </header>`;
}
