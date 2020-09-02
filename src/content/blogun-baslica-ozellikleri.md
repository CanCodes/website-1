---
title: Blogun Başlıca Özellikleri (Güncellenecek)
description: Tamamen sıfırdan hazırlanan, EGGSY'nin gönderilerini tutacağı ve paylaşımlar yapacağı yep yeni blogunun öne çıkan ilginç özellikleri ve blogun genel tanıtımı için bu gönderiyi okuyabilirsiniz.
tags: blog, haber
cardImage: https://the-person-under-this-message.is-inside.me/fVQbxb2E.png
image: https://the-person-under-this-message.is-inside.me/K5dGXgGz.png
createdAt: 2020-01-09T03:26:00.000Z
---

[Bu yazımda](/blog/gonderi/nedir-bu-blog) da bahsettiğim gibi blog, hiçbir hazır tasarım (Vuetify dışında), hazır kod veya hazır sistemler kullanılmadan, tamamiyle sıfırdan tasarlanmıştır. Bu gönderide okuyacağınız özelliklerin hiçbiri internetten alınmamış, sıfırdan yapılmıştır. _Kısacası, emeğe saygı, yorum bırak, teşkür._

Blog başlı başına tabii ki tüm elementlerine kadar el ile kodlanmadı. Vuetify sayesinde bu elementler hazır olarak gelse de yerleşimi, arka plandaki API sistemi ve geriye kalan sistemlerin hepsi sıfırdan yazıldı. Bunlardan ilki ise ana sayfa... Ana sayfa, oldukça basit olsa bile bir çok ufak detay barındırıyor. Bunlardan ilki, son 4 (bu sayı monitörünüzün boyutuna göre değişebilir ancak maksimum 5 gönderi gösterecektir, elden bu kadar geldi) gönderinin galeri gibi sayfanın en üstünde yer alması ve bunların üzerine gelince efekt ile birlikte "Devamını Oku" butonunun çıkması.

![image](https://the-person-under-this-message.is-inside.me/jkWJwCMY.gif)

Ana sayfanın bir diğer yanı ise varsayılan olarak "Gönderiler" başlığının altında tarihlerine göre sıralanmış gönderilerin bulunması. Burada da gerekli efektler ve gönderinin içine girmeden alabileceğiniz kısa bilgileri içeren bir "tooltip" bulunuyor.

![image](https://the-person-under-this-message.is-inside.me/seyqPg22.gif)

Gönderilerinse hemen altında bulunan bir buton da bu gönderilerden daha eski 5 gönderiyi daha getirmenizi sağlıyor. Bu butona tıklayarak gösterilen gönderilere 5 tane daha ekleyebilirsiniz. Gösterilenden daha fazla gönderi olmaması durumunda buton otomatik olarak devredışı kalacak ve yazısı değişecektir.

![image](https://the-person-under-this-message.is-inside.me/c8I9VuQi.gif)

Ana sayfadan şimdilik bu kadar. İlerleyen zamanlarda pek bir değişiklik yapacağımı düşünmesem de zamanla görüntüde ve işlevde ufaklı büyüklü değişiklikler olabilir. Şimdi ise sıra "Gönderiler" kısmının ve her sayfada (bazı gönderiler dışında) gözüken yan menü. Bu menüde şimdilik 2 eleman var, bunlardan birisi botumun en sevdiğim özelliklerinden birisi olan günlük müzik öneri sistemi diğeri ise blogda en çok görüntülenen son 5 yazımızın bulunduğu bir veri tablosu. Eğer gün için seçilmiş bir müzik yoksa otomatik olarak Rick Roll moduna geçiyor 🕺.

![image](https://the-person-under-this-message.is-inside.me/saAFY5FM.png)

Yan menüden başka her sayfada görünen yönlendirme çubukları ve arama kısmı ise hem mobilde, hem masaüstünde sayfalara daha hızlı ulaşıp bulmak istediğiniz gönderileri aramanızı sağlıyor. Arama sonuçları, yazılmış tüm gönderiler arasında belirtilen kelimeleri içeren başlığa sahip gönderileri tarihlerine göre sıralayıp size gösterecektir. On numara bir arama denemez ama zamanla bunun üzerinde de çalışırsam bu yazıyı burada göremeyebilirsiniz 🙃

![image](https://the-person-under-this-message.is-inside.me/44GrkwLo.gif)

Şimdi ise sıra gönderi sayfalarında. Gönderi sayfaları, bir çok farklı tasarım aşamasından geçerek şuanki görünümüne kavuştu. Hala 10/10 denilecek bir görünüme sahip değil ancak şuan elimizdeki en iyisi bu. Zamanla eminim bu sayfalara da güzel bir güncelleme getireceğim. Genel olarak tüm içerik sayfalarının içerdiği bilgileri okunabilir bir şekilde içeririyor. Bunlar, yazarın ismi ve yazara ulaşabileceğiniz profil bağlantısı, gönderinin yazıldığı tarih, gönderinin etiketleri ve gönderinin içeriği.

![image](https://the-person-under-this-message.is-inside.me/yxjXBHHy.png)

Devamında ise her gönderinin altında bulunan yorumlar kısmı var. Bu kısım özellikle benim favorilerimden biri (kesinlikle yorum onay sistemini yapmam can sıkıcı derecede uzun sürdüğü için değil) çünkü sadece yorum değil, aynı zamanda gönderilere tepki de ekleyebiliyorsunuz!

![image](https://the-person-under-this-message.is-inside.me/4qWWtlxA.gif)

Geriye ise bu kategoride etiket sayfaları kalıyor. Bu sayfalarda aradığınız etikete sahip tüm gönderilerin aynı ana sayfadaki gönderiler kısmının çalışma sistemi ile çalışan bir sistemle ulaşabilirsiniz.

![image](https://the-person-under-this-message.is-inside.me/POGiJhVp.png)

Çoğunuzun görebileceği son şey ise yazar sayfaları! Evet, bu sayfayı yaparken çok düşünmem ve sonuç olarak çok basit bir tasarım çıkartmam dışında gerçekten güzel bir yazar sayfası oluşturduğumu düşünüyorum. Yazar sayfalarında yazarın ismini, resmini, biyografisini, varsa rozetlerini ve bugüne kadar yazdığı tüm yazıları bir zaman çizelgesi şeklinde görebilirsiniz. Bu sayfaları sadece yazarın kendisi düzenleyebilir.

![image](https://the-person-under-this-message.is-inside.me/ePridvSj.gif)

Buradan geriye ise yönetici ve yazar sayfaları kalıyor. Bunları da göstermek istiyorum çünkü yapım aşamasında en çok bunlara uğraştım 😡 Normalde benim tarzım olan manuel olarak veritabanına bilgiler girilsin, istek gelince çekilsin mantığı yerine bu blogda tamamen "pırofesyönöl" olmaya çalıştım. Kesinlikle herhangi bir şey iddia etmiyorum ama gönderileri manuel olarak veritabanına yazmaktansa bir yazı kutusuna yazmak çok daha iyi hissettiriyor 😅 Aşağıdaki resimde gördüğünüz kısım sitede yazar olan herkesin görebileceği, yazılarını ve profillerini düzenleyebileceği yazar paneli kısmı. Şimdilik sadece yazarlar bunları yapabiliyor ancak ileride zaman ne getirir belli olmaz.

![image](https://the-person-under-this-message.is-inside.me/QJwptGbo.png)

Bir sonraki videoda (resim veya GIF'e sığmayacak derecede uzun işlemler) gördüğünüz ise yeni gönderi oluşturma sayfası. Bu sayfa teknik olarak gönderi düzenleme sayfası ile aynı olsa da düzenleme sayfasından farkları da var. Gönderi içeriği ve kısa açıklama kısımları, markdown dediğimiz Discord'dan aşina olduğumuz yazı format aracını destekliyor ve gönderileri yazmak böylelikle daha kolay olması gerekiyor ancak tam olarak düzgün çalıştığı söylenemez. Merak etmeyin! Bunun sadece bana zararı var, ve en yakın zamanda buna da bir düzenleme getireceğim!

<video class="ql-video" controls="" src="https://the-person-under-this-message.is-inside.me/wmYGNW2t.mp4" width="100%"></video>

Sanırım şuanda blogun sahip olduğu tüm özellikler bu kadar. Yeni özellikler eklendiğinde de blogda duyurusu geçecektir. Zamanla oluşan hataları düzeltip, yenilikler yapmaya gayret göstereceğim. Umarım sizinde hoşunuza gitmiştir. Ben 4 günümü buna harcadım, siz neler yapıyorsunuz peki?
