/* Dashboard Pemilik: kalkulator penghematan komisi OTA + grafik (SVG murni, tanpa library) */
(function () {
  const root = document.getElementById("view-dashboard");
  if (!root) return;
  const rp = (n) => "Rp" + Math.round(n).toLocaleString("id-ID");
  const juta = (n) => "Rp" + (n / 1e6).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " jt";
  const SEASON = [0.85, 0.8, 0.9, 0.95, 1.0, 1.15, 1.2, 1.1, 0.95, 0.9, 1.0, 1.25];
  const BULAN = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  const inputs = [
    { id: "rooms", label: "Jumlah kamar", min: 10, max: 300, step: 5, val: 60 },
    { id: "adr", label: "Tarif rata-rata per malam (Rp)", min: 300000, max: 3000000, step: 50000, val: 850000 },
    { id: "occ", label: "Okupansi rata-rata (%)", min: 30, max: 95, step: 1, val: 68 },
    { id: "ota", label: "Porsi pemesanan lewat OTA (%)", min: 10, max: 90, step: 1, val: 55 },
    { id: "comm", label: "Komisi OTA (%)", min: 10, max: 25, step: 1, val: 18 },
    { id: "shift", label: "Target pindah ke booking langsung (%)", min: 5, max: 60, step: 5, val: 30 },
  ];
  root.innerHTML = `
  <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
    <span class="text-xs font-bold text-brand-dynamic">Fitur #13: Bukti nilai untuk pemilik hotel</span>
    <h2 class="text-xl sm:text-2xl font-extrabold mt-1">Berapa komisi OTA yang bisa <span id="d-brand">hotel Anda</span> simpan?</h2>
    <p class="text-sm text-slate-600 mt-1 max-w-2xl">Geser angka sesuai data hotel klien. Hasilnya langsung berubah, jadi bisa dipakai di tengah rapat.</p>
  </div>
  <div class="grid lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      ${inputs.map(i => `<div><div class="flex justify-between text-xs font-semibold text-slate-700"><label for="d-${i.id}">${i.label}</label><output id="o-${i.id}" class="text-brand-dynamic"></output></div>
      <input id="d-${i.id}" type="range" min="${i.min}" max="${i.max}" step="${i.step}" value="${i.val}" class="w-full" style="accent-color:var(--brand-primary)"></div>`).join("")}
    </div>
    <div class="lg:col-span-2 space-y-6">
      <div class="grid sm:grid-cols-3 gap-4" id="d-kpi"></div>
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
        <h3 class="text-sm font-bold mb-1">Komisi yang dibayar per bulan (juta rupiah)</h3>
        <p class="text-xs text-slate-600 mb-2">Abu-abu: kondisi sekarang. Warna brand: setelah booking langsung naik. Pola musiman mengikuti tren liburan Indonesia.</p>
        <div id="d-chart" class="overflow-x-auto"></div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm grid sm:grid-cols-2 gap-4" id="d-donuts"></div>
    </div>
  </div>`;

  const v = (id) => +document.getElementById("d-" + id).value;
  function donut(title, parts) {
    const R = 42, C = 2 * Math.PI * R; let off = 0;
    const arcs = parts.map(p => { const len = C * p.v / 100; const a = `<circle r="${R}" cx="60" cy="60" fill="none" stroke="${p.c}" stroke-width="18" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 60 60)"/>`; off += len; return a; }).join("");
    return `<div class="flex items-center gap-4"><svg viewBox="0 0 120 120" class="w-28 h-28 shrink-0" role="img" aria-label="${title}">${arcs}</svg>
    <div class="text-xs space-y-1"><div class="font-bold text-sm">${title}</div>${parts.map(p => `<div class="flex items-center gap-2"><span class="w-3 h-3 rounded-sm" style="background:${p.c}"></span>${p.l}: <b>${p.v.toFixed(0)}%</b></div>`).join("")}</div></div>`;
  }
  function update() {
    inputs.forEach(i => document.getElementById("o-" + i.id).textContent = i.id === "adr" ? rp(v(i.id)) : v(i.id) + (i.id === "rooms" ? "" : "%"));
    document.getElementById("d-brand").textContent = (document.getElementById("brand-name-display") || {}).textContent || "hotel Anda";
    const rev = v("rooms") * 30 * (v("occ") / 100) * v("adr");
    const otaNow = v("ota"), otaNew = Math.max(0, otaNow - v("shift"));
    const cNow = rev * otaNow / 100 * v("comm") / 100, cNew = rev * otaNew / 100 * v("comm") / 100;
    const save = cNow - cNew;
    document.getElementById("d-kpi").innerHTML = [
      ["Pendapatan kamar / bulan", juta(rev), "text-slate-900"],
      ["Penghematan / bulan", juta(save), "text-brand-dynamic"],
      ["Penghematan / tahun", juta(save * 12), "text-brand-dynamic"],
    ].map(k => `<div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm"><div class="text-xs text-slate-600">${k[0]}</div><div class="text-2xl font-extrabold ${k[2]} mt-1">${k[1]}</div></div>`).join("");
    const max = Math.max(...SEASON) * cNow / 1e6, W = 640, H = 190, bw = 20;
    document.getElementById("d-chart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" class="w-full min-w-[560px]" role="img" aria-label="Grafik komisi OTA per bulan sebelum dan sesudah">` +
      SEASON.map((s, i) => { const a = s * cNow / 1e6, b = s * cNew / 1e6, x = 20 + i * 51, h1 = a / max * 140, h2 = b / max * 140;
        return `<rect x="${x}" y="${160 - h1}" width="${bw}" height="${h1}" fill="#cbd5e1" rx="2"/><rect x="${x + bw + 2}" y="${160 - h2}" width="${bw}" height="${h2}" style="fill:var(--brand-primary)" rx="2"/><text x="${x + bw}" y="178" font-size="11" text-anchor="middle" fill="#475569">${BULAN[i]}</text><text x="${x + bw}" y="${150 - h1}" font-size="9" text-anchor="middle" fill="#475569">${a.toFixed(0)}</text>`; }).join("") + `</svg>`;
    document.getElementById("d-donuts").innerHTML =
      donut("Saluran sekarang", [{ l: "OTA", v: otaNow, c: "#94a3b8" }, { l: "Langsung", v: 100 - otaNow, c: "#059669" }]) +
      donut("Target dengan platform ini", [{ l: "OTA", v: otaNew, c: "#94a3b8" }, { l: "Langsung", v: 100 - otaNew, c: "#059669" }]);
  }
  inputs.forEach(i => document.getElementById("d-" + i.id).addEventListener("input", update));
  document.querySelectorAll('[data-tab="dashboard"]').forEach(b => b.addEventListener("click", update));
  update();
})();
