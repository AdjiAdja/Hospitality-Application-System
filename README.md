# NusaLodge — Platform Reservasi Hotel & Penginapan Ramah Tamu (GitHub Pages Ready)

Repositori ini berisi aplikasi web interaktif **Direct Booking Engine & Marketplace Reservasi Hotel/Penginapan** yang dirancang khusus untuk dipresentasikan dan dijual kepada pemilik/manajer hotel, resort, vila, maupun guesthouse.

## Struktur Proyek
```
nusalodge/
├── index.html            # kerangka halaman (±56 KB, sebelumnya 6,5 MB)
├── manifest.json         # PWA
├── .nojekyll
├── css/styles.css        # tema & variabel warna white-label
├── js/
│   ├── tailwind-config.js
│   ├── app.js            # logika 5 tab utama
│   └── dashboard.js      # BARU: Dashboard Pemilik & kalkulator komisi OTA
├── assets/img/           # foto properti (sudah dikompres)
└── .github/workflows/pages.yml   # deploy otomatis saat push
```

## Fitur Baru: Dashboard Pemilik (Tab 6)
Kalkulator penghematan komisi OTA dengan grafik komisi bulanan (pola musiman) dan perbandingan bauran saluran sebelum/sesudah. Gunakan saat rapat: masukkan angka hotel klien, lalu tunjukkan nilai penghematan per tahun.

## Keunggulan Utama (12 Fitur Pembeda untuk Klien Hotel)
1. **Harga All-In Sejak Halaman Pertama**: Pajak PB1 (11%), Biaya Layanan (10%), dan Resort Fee (Rp0) langsung dihitung di awal disertai grafik riwayat harga 30 hari. Harga pencarian = harga checkout.
2. **Garansi Reservasi Terverifikasi (Simulasi Adapter PMS) & Relokasi Otomatis**: Dilengkapi kode verifikasi resepsionis dan simulasi pemindahan otomatis ke hotel setara jika sistem PMS mengalami kendala.
3. **Pelacak Pembatalan Visual & Refund 1-Ketukan**: Garis waktu kebijakan potongan yang transparan dan pelacak status pengembalian dana 3 tahap secara real-time.
4. **Inspeksi Tingkat Nomor Kamar Fisik**: Tamu dapat memilih nomor unit kamar spesifik (mis. `#204`, `#101`) lengkap dengan informasi lantai, jarak ke lift, desibel kebisingan (dB), dan hasil tes kecepatan WiFi aktual (Mbps).
5. **Ulasan Terverifikasi Per Profil Tamu**: Hanya dari reservasi berstatus selesai (`COMPLETED`), dapat difilter menurut profil (Keluarga, Lansia, WFA, Difabel, Wisatawan Muslim) dengan urutan tanpa bias.
6. **Filter Kebutuhan Khusus Rinci**: Filter akses kursi roda (lebar pintu ≥90cm, tanpa tangga), sertifikasi halal, musala & arah kiblat, ramah anak, ramah hewan, dan WiFi cepat.
7. **Profil Preferensi Portabel & Kontrol Izin Hotel**: Tamu menyimpan preferensi bantal, suhu AC, dan alergi serta bebas mencabut izin akses per hotel kapan saja.
8. **Check-In Web Tanpa Unduh Aplikasi & Kunci Digital BLE**: Diakses langsung lewat tautan WhatsApp/Web lengkap dengan opsi Early Check-In / Late Check-Out dan simulasi pembuka kunci kamar Bluetooth (BLE).
9. **Dukungan Hibrida (Asisten AI Function-Calling + Eskalasi Staf WA 1-Langkah)**: AI dapat menggeser jadwal atau membatalkan pesanan disertai penjelasan kebijakan, plus eskalasi langsung ke staf manusia 24/7.
10. **Fitur Pasca-Menginap Lengkap**: Check-out mobile 1-ketukan, pencetakan Faktur/Invoice Perjalanan Dinas (dilengkapi input NPWP perusahaan), pelacak pengembalian deposit, dan pelacak barang tertinggal (*Lost & Found*).
11. **Privasi Identitas KTP/Paspor**: Simulasi brankas enkripsi AES-256-GCM dengan penghapusan otomatis sesuai masa retensi pasca-check-out.
12. **Konteks Lokal Nusantara & Panel White-Label B2B**: Pembayaran sandbox QRIS, Virtual Account, dan E-Wallet, info jarak bandara/stasiun/RS terdekat, serta **Bilah Presentasi B2B** di bagian atas layar untuk mengganti nama brand klien, model bisnis, dan tema warna secara langsung saat demo.

## Cara Deploy ke GitHub Pages (Kurang dari 2 Menit)

### Opsi A: Upload Langsung via Browser GitHub
1. Buat repositori publik baru di GitHub (contoh: `demo-reservasi-hotel`).
2. Ekstrak file ZIP ini, lalu upload seluruh isinya (`index.html`, `manifest.json`, `.nojekyll`, `README.md`, dan folder `.github`) ke repositori tersebut.
3. Buka menu **Settings → Pages** di repositori GitHub Anda.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu sekitar 60 detik, dan website Anda langsung aktif di `https://<username-anda>.github.io/demo-reservasi-hotel/`.

### Opsi B: Push via Terminal Git
```bash
git init
git add .
git commit -m "Initial commit: Platform Reservasi Hotel Ramah Tamu"
git branch -M main
git remote add origin https://github.com/<username-anda>/<nama-repo>.git
git push -u origin main
```
