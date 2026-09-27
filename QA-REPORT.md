# THERA Pilates V1 — Final QA Report

Kontrol tarihi: 24.09.2026

## Kapsam
- Ana Sayfa
- Hakkımızda
- Hizmetler
- Kurucular
- Stüdyomuz
- İletişim
- 404 sayfası
- CSS / JavaScript / görsel varlıkları
- Statik site güvenlik altyapısı
- Dahili bağlantılar ve yerel HTTP erişimi

## Kontroller
- ZIP bütünlük testi: OK
- Tüm HTML sayfalarının yerel HTTP üzerinden açılması: OK
- HTML içindeki yerel `href` / `src` hedeflerinin kontrolü: OK
- CSS / JS / görsel dosya yolları: OK
- JavaScript syntax kontrolü (`node --check`): OK
- Gerçek görsel dosyalarının paket içinde bulunması: OK
- Telefon bağlantıları: `tel:` formatında ve iki doğrulanmış numaraya bağlı
- Google Maps bağlantısı: HTTPS
- Instagram bağlantısı: HTTPS
- HTTPS dışı harici içerik referansı: Yok
- Placeholder domain / example.com / localhost / TODO / FIXME taraması: Temiz
- WhatsApp numarası uydurulmadı; doğrulanmamış numara eklenmedi
- Domain kesinleşmediği için canonical ve production sitemap uydurulmadı

## Güvenlik
`.htaccess` içinde aşağıdaki temel korumalar bulunuyor:
- Directory listing kapalı (`Options -Indexes`)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` ile kamera, mikrofon ve konum erişiminin kapatılması
- Content Security Policy
- `frame-ancestors 'self'`
- `object-src 'none'`
- HTTPS zorlaması için `upgrade-insecure-requests`
- HSTS

V1 statik yapıda veritabanı, admin paneli, kullanıcı oturumu veya sunucu taraflı form işleme bulunmadığından saldırı yüzeyi düşük tutulmuştur.

## Yayına almadan önce yapılacaklar
1. Domain ve hosting bağlanır.
2. HTTPS sertifikası doğrulanır.
3. Gerçek domain ile production `sitemap.xml` oluşturulur.
4. Google Search Console kurulumu yapılır.
5. Gerçek cihazlarda mobil menü, telefon bağlantıları, galeri/lightbox, Google Maps ve tüm sayfa geçişleri tekrar kontrol edilir.
6. Hosting üzerinde yedekleme ve geri dönüş noktası oluşturulur.

## Önemli not
Bu paket V1 statik web sitesidir. Güvenlik kontrolleri dosya ve statik altyapı seviyesinde yapılmıştır. Hiçbir web sitesi için %100 saldırı geçirmezlik garantisi verilemez; hosting, domain, DNS, SSL ve sunucu yapılandırması da yayın ortamında doğru yapılmalıdır.
