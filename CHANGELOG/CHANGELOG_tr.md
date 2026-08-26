# Değişiklik Günlüğü

Bu projedeki tüm önemli değişiklikler bu dosyada belgelenmiştir.

## [1.2.0]

### Eklendi
- Ayarlar panelinde üç modlu "Otomatik Güncellemeler" bölümü:
  - **Güncellemeyi kontrol et ve aç** — arka planda güvenilir güncelleme kaynağını periyodik olarak kontrol eder ve daha yeni bir sürüm bulunduğunda güncelleme sayfasını açar
  - **Bana güncellemeleri bildir** — periyodik olarak kontrol eder ve yalnızca bir bildirim gösterir
  - **Güncelleme kontrollerini devre dışı bırak** — komut dosyası kendi kendine asla kontrol yapmaz
- Mevcut komut dosyası sürümünün yanında görüntülenen manuel "Güncellemeleri Kontrol Et" düğmesi (kullanıcı komut dosyasının kendi meta verilerinden okunur)
- Tampermonkey/Violentmonkey yerel otomatik güncellemesinin bu ayar tarafından kontrol edilmeyen ayrı bir mekanizma olduğunu açıklayan açıklayıcı metin
- Harici ses dosyaları veya kitaplıklar olmadan yerel Web Audio API üzerine inşa edilmiş Ses Efektleri (SFX) sistemi:
  - Genel açma/kapama anahtarı ve ana ses kontrolü
  - 13 bağımsız olarak açılıp kapatılabilir ses kategorisi (düğme tıklamaları, çeviri, kopyalama, yeniden deneme, panel, sekmeler, ayarlar, geçişler, önbellek, geçmiş, içe/dışa aktarma, modlar, otomatik çeviri)
  - Farklı eylemler için ayrı kısa sesler ve bir "Sesi Test Et" düğmesi
  - Metinden konuşmaya (TTS) işlevselliğinden tamamen bağımsız
  - Toplu/otomatik çeviri dahil olmak üzere ses spam'ini önlemek için olay başına bekleme süreleri (cooldowns)
- Unicode emoji bayraklarının yerini alan, Arayüz Dili ve Çeviri Dili seçicilerinde desteklenen her dil için gerçek, bağımsız SVG bayrak simgeleri. Simgeler doğrudan komut dosyasına gömülüdür; bunları görüntülemek için ağ üzerinden hiçbir şey çekilmez
- İçe Aktar düğmesi ve DeepL "Test" düğmesi için ayrı tıklama sesleri

### Değiştirildi
- Güncelleme kontrolleri için sürüm karşılaştırması, dize karşılaştırması yerine uygun sayısal semantik sürüm karşılaştırması kullanır

### Güvenlik
- DeepL API anahtarları dışa aktarılan ayar dosyalarından hariç tutulur
- Ayar dosyasını içe aktarmak artık yerel olarak depolanan API anahtarlarının üzerine yazmaz; anahtarlar yalnızca özel DeepL API Anahtarları alanı üzerinden değiştirilebilir
- İçe aktarılan yapılandırma uygulanmadan önce alan alan doğrulanır (dil kodları, tema, motor, sayısal aralıklar, ses ayarları, güncelleme modu); geçersiz veya tanınmayan değerler göz ardı edilir ve kabul edilmek yerine mevcut/güvenli varsayılanlarla değiştirilir
- Güvenilir güncelleme kaynağı komut dosyasında sabit bir değerdir ve içe aktarılan ayarlar aracılığıyla yapılandırılamaz
- Güncelleme kontrolleri yalnızca çekilen komut dosyası metninden bir sürüm numarası okur; indirilen hiçbir kod hiçbir noktada çalıştırılmaz

### Düzeltildi
- Otomatik Güncellemeler bölümü için duyarlı düzen, böylece daha uzun yerelleştirilmiş etiketler ayarlar panelinden taşmak yerine alt satıra geçer

## [1.0.10]

### Eklendi
- 5 yeni UI dili: İtalyanca, Portekizce, Korece, Vietnamca, Arapça — arayüz artık her etiket, düğme, araç ipucu ve bölüm (DeepL ve İstek Limitleri dahil) tamamen çevrilmiş olarak toplam 15 dili destekliyor
- Arayüz dili artık ilk kurulumda tarayıcı/sistem yerel ayarlarından otomatik olarak algılanıyor

### Değiştirildi
- Yazar ve depo meta verileri mevcut bakımcıyı yansıtacak şekilde güncellendi
- DeepL API Anahtarları ve İstek Limitleri bölümleri artık desteklenen tüm UI dillerinde tamamen yerelleştirilmiştir (önceden seçilen dilden bağımsız olarak İngilizce gösteriliyordu)
- İstek gecikmesi kaydırıcısı artık zaman birimini doğru dilde görüntüler (ör. `ms`, `мс`, `毫秒`)
- Özel renk seçiciler artık temaları değiştirirken değerlerini doğru şekilde güncelliyor

### Kaldırıldı
- Açık tema (Karanlık, Cyberpunk ve Dracula kullanılabilir kalmaya devam ediyor)
- Metin rengi seçici (yalnızca UI metninin bir kısmını etkiliyordu, bu da yanıltıcıydı)
- Metinden Konuşmaya (TTS) — düzgün çalışmadığı için kaldırıldı

### Düzeltildi
- DeepL yardım bağlantısı daha önce `api-free.deepl.com` adresine işaret ediyordu; artık doğru şekilde `deepl.com/pro-api` adresine bağlanıyor
- "DeepL Anahtarlarını Kaydet" düğme metni 6 UI dilinde (Rusça, Ukraynaca, Almanca, Fransızca, İspanyolca, Türkçe) kesiliyordu; etiketler tüm ekran boyutlarına uyacak şekilde kısaltıldı
- Temaları değiştirmek artık yeni temanın üzerine uygulanan eski özel renkleri bırakmıyor

[Sürümü görüntüle](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

[Dylan-ZQL](https://github.com/Dylan-ZQL) tarafından katkıda bulunulmuştur. v1.0.0 ve v1.0.9 kaynak dosyaları karşılaştırılarak doğrulanmıştır.

### Eklendi
- Mevcut Google ve MyMemory motorlarının yanı sıra DeepL çeviri motoru
  - Bir anahtar başarısız olursa otomatik rotasyon ve geri çekilme ile birden fazla DeepL API anahtarı desteği
  - Ücretsiz ve Pro API uç noktalarının otomatik algılanması
  - Uzun metinler çevrilmeden önce istek boyutundaki parçalara bölünür
  - Yapılandırılabilir istek limitleri: maks eşzamanlı istek, saniye başına maks istek, istek başına maks karakter, istek başına maks paragraf
- Kaydırırken otomatik çeviri: Ek bir `IntersectionObserver`, mevcut tembel düğme ekleme gözlemcisinden ayrı olarak içeriği görünüm alanına girdikçe otomatik olarak çevirir
- Bütün sayfanın orijinal ve çevrilmiş metin arasında geçiş yapmasını sağlayan "Orijinalini göster / Çeviriyi göster" geçiş düğmesi
- Diğer kullanıcı komut dosyalarıyla çakışmaları önlemek için depolanan her ayara uygulanan depolama anahtarı öneki (`_x9_`)
- Çeviri/istek kodunda kullanılan temel HTML kaçırma ve güvenli JSON ayrıştırma yardımcıları

### Değiştirildi
- Çeviri istek kuyruğu yeniden yazıldı: önceki sabit gecikmeli zincir, yapılandırılabilir eşzamanlılığa ve saniye başına oran limitlerine uyan bir kuyrukla değiştirildi
- Yüzen eylem düğmesi yeniden tasarlandı: etiketli "TRANSLATE ALL" düğmesi, ilerleme çubuğu ve iptal düğmesi, tıklandığında görünür içeriği çeviren ve çift tıklandığında ayarlar panelini açan tek bir kompakt simge düğmesiyle değiştirildi
- Metinden konuşmaya oynatma artık durum bilgisine sahiptir: aynı metinde tekrar "konuş"a tıklamak oynatmayı durdurur, etkin düğme görsel olarak vurgulanır ve önceki 500 karakterlik kısaltma sınırı kaldırıldı

### Kaldırıldı
- "Tümünü çevir" klavye kısayolu (`Ctrl+Shift+T`) ve panel ayarı — görünür içeriği çevirme işlemi artık yukarıda açıklanan yeniden tasarlanmış yüzen düğme tarafından yönetiliyor

- [Sürümü görüntüle](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Eklendi
- İlk genel sürüm

[Sürümü görüntüle](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
