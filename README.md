# THERA Pilates Stüdyosu — V1 Final

THERA Pilates Stüdyosu için hazırlanmış statik, responsive ve yayına hazır V1 web sitesi.

## Sayfalar
- Ana Sayfa
- Hakkımızda
- Hizmetler
- Kurucular
- Stüdyomuz
- İletişim
- 404

## Teknik yapı
- HTML / CSS / JavaScript
- Statik yapı; veritabanı ve admin paneli yoktur
- THERA'ya ait gerçek görseller kullanılmıştır
- Responsive navigasyon
- Stüdyo galerisi ve lightbox (önceki/sonraki, sayaç, ESC ve klavye desteği)
- Temel SEO meta bilgileri
- Root `robots.txt`
- Apache/Hostinger güvenlik başlıkları için `.htaccess`

## Yayına alma
ZIP içeriğini hosting hesabının web kök dizinine (çoğunlukla `public_html`) yükleyin. Klasör yapısını bozmayın.

Domain bağlandıktan sonra:
1. HTTPS'nin aktif olduğunu doğrulayın.
2. Gerçek domain ile `sitemap.xml` oluşturun.
3. Canonical URL'yi gerçek domain üzerinden ekleyin.
4. Google Search Console'a siteyi ekleyin ve sitemap'i gönderin.
5. Telefon, Instagram, Google Maps, navigasyon ve galeri işlevlerini gerçek cihazlarda tekrar test edin.

## İçerik doğruluğu
- Adres: Emir Beyazıt Mahallesi, 28. Sokak, Muğla Life AVM, A Blok No: 6
- Telefonlar: 0505 918 36 03 / 0555 868 17 95
- Çalışma saati: 08.30–22.00
- Instagram: @therapilatesmugla
- Hizmetler: Reformer Pilates, Hamile Pilatesi, Barrel, Yoga
- Kurucular: Mihriban Doğaroğlu ve Fizyoterapist Damla Koca

WhatsApp numarası doğrulanmadığı için siteye uydurma WhatsApp bağlantısı eklenmemiştir.

## Güvenlik
`.htaccess` içinde temel güvenlik başlıkları, CSP, HSTS, directory listing engeli ve erişim politikaları bulunmaktadır. V1'de backend/admin/auth olmadığı için saldırı yüzeyi azaltılmıştır.

Detaylı son kontrol listesi için `QA-REPORT.md` dosyasına bakın.
