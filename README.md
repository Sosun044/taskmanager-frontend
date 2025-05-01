Task Management System
Bu proje, görev yönetimi için geliştirilmiş bir web uygulamasıdır. Kullanıcılar görevleri oluşturabilir, güncelleyebilir, silebilir ve listeleyebilir. Ayrıca, kullanıcı yönetimi de yapılabilir. React.js kullanılarak front-end tarafı geliştirilmiş, back-end ise Spring Boot ile yapılmıştır.

Proje Özeti
Bu projede temel olarak kullanıcılar, görevler oluşturabilir ve bu görevlerin durumlarını yönetebilir. Kullanıcılar sisteme kayıt olup, farklı rollerle sisteme giriş yapabilir. Admin kullanıcıları oluşturabilir ve güncelleyebilir. Her görev için başlık, açıklama, atanacak kişi, öncelik seviyesi, tahmini süre, bitiş tarihi gibi bilgiler girilebilir.

Teknolojiler
Frontend: React.js, React Router, Axios, Bootstrap

Backend: Spring Boot (API), PostgreSQL
https://github.com/Sosun044/taskmanager (Backend adres)

Diğer: Node.js, npm

Kurulum
1. Backend (Spring Boot)
Projenin backend kısmı, Spring Boot kullanarak geliştirilmiştir. API, görevler ve kullanıcılar ile ilgili işlemleri yönetmektedir.

Backend'i Çalıştırma
Spring Boot Projesini Çalıştırma:

src/main/resources/application.properties dosyasındaki veritabanı bağlantı bilgilerini güncelleyin:

spring.datasource.url=jdbc:postgresql://localhost:5432/task_management_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

mvn spring-boot:run


Backend API'si localhost:8080'da çalışmaya başlayacaktır. Ön uç (frontend) bu API ile iletişim kurarak veri alır ve gönderir.


2. Frontend (React.js)
Projenin frontend kısmı, React.js kullanılarak geliştirilmiştir. Kullanıcılar arayüzü üzerinden görevleri yönetebilir.

Frontend'i Çalıştırma
Bağımlılıkları Yükleme:

Projenin frontend kısmı için gerekli bağımlılıkları yüklemek için terminalde şu komutları çalıştırın:
npm install

Frontend'i Çalıştırma:

React uygulamasını başlatmak için aşağıdaki komutu çalıştırın:

npm start
Bu komut, uygulamayı http://localhost:3000 adresinde başlatacaktır. ona uyarlanmıştır

API Endpoints
1. Kullanıcı API'leri
POST /api/users/create - Yeni bir kullanıcı oluşturur.

GET /api/users/list - Tüm kullanıcıları listeler.

GET /api/users/list/{userId} - ID'sine göre kullanıcıyı getirir.

PUT /api/users/update/{userId} - Kullanıcıyı günceller.

DELETE /api/users/delete/{userId} - Kullanıcıyı siler.

2. Görev API'leri
POST /api/tasks/create - Yeni bir görev oluşturur.

GET /api/tasks/list - Tüm görevleri listeler.

GET /api/tasks/list/{taskId} - ID'sine göre bir görevi getirir.

PUT /api/tasks/update/{taskId} - Görevi günceller.

DELETE /api/tasks/delete/{taskId} - Görevi siler.

Özellikler
1. Görev Oluşturma
Kullanıcılar, görev başlığı, açıklaması, atanacak kişi, öncelik, bitiş tarihi ve tahmini süre gibi bilgileri girerek yeni görevler oluşturabilir.

2. Görev Güncelleme
Kullanıcılar, görevlerin başlık, açıklama, atanacak kişi, durum gibi bilgilerini güncelleyebilir. Güncelleme işlemi başarılı olduktan sonra görevler güncellenir.

3. Görev Silme
Kullanıcılar, görevleri silebilir. Silme işlemi sonrası, görev listesi güncellenir.

4. Görev Listeleme
Kullanıcılar, tüm görevleri listeleyebilir. Her görevde, başlık, açıklama, atanacak kişi, öncelik, durum ve bitiş tarihi bilgileri görünür.

5. Kullanıcı Yönetimi
Admin kullanıcılar, yeni kullanıcılar oluşturabilir, mevcut kullanıcıları güncelleyebilir veya silebilir. Kullanıcılar, ad, e-posta, şifre ve rol bilgileriyle yönetilebilir.

Kullanıcı Rolleri
Admin: Kullanıcıları oluşturabilir, güncelleyebilir ve silebilir. Görevleri yönetebilir.

User: Görev oluşturabilir, güncelleyebilir ve silebilir.

Kullanıcı Arayüzü
Kullanıcı Ekleme Sayfası: Admin kullanıcıları yeni kullanıcı ekleyebilir.

Kullanıcı Listeleme Sayfası: Admin kullanıcıları mevcut kullanıcıları listeleyebilir.

Görev Ekleme Sayfası: Kullanıcılar yeni görevler oluşturabilir.

Görev Listeleme Sayfası: Kullanıcılar görevleri görüntüleyebilir.

Görev Güncelleme Sayfası: Kullanıcılar mevcut görevlerini güncelleyebilir.

Çalıştırma ve Geliştirme
Bu projeyi yerelinizde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

Backend'i çalıştırın (Spring Boot ile).

Frontend'i çalıştırın (React ile).

Uygulamayı kullanmaya başlayın.

