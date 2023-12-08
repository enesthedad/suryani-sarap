import { lazy, Suspense } from "react";
import Loading from "../Loading";
const MidyatImg = lazy(() => import("./MidyatImg"));
const Midyat = () => {
  return (
    <>
      <div className='product-container'>
        <MidyatImg />
        <div className='blog-text'>
          <h5>Midyat</h5>
          <p>
            Midyat, tarihte birçok medeniyete başkentlik etmiş, Süryaniler’in
            anavatanı olarak kabul edilen Turabdin Bölgesi sınırları içerisinde
            yer alan kadim bir ilçedir. Midyat isminin kökeni, Süryanice
            “vatanım” anlamına gelmekte olan Matiate kelimesinden türemiştir.
            İlçede Süryaniler’in yanı sıra farklı etnik kökenlere sahip
            toplumların da yaşaması sebebiyle Dinler ve Diller Şehri olarak
            anılmaktadır. İlçenin birçok yerinde Süryani Ustalar tarafından
            yapılmış olan tarihi yapılar, konaklar, hanlar, kilise, manastır ve
            camiiler bulunmaktadır. İlçede taş işleme sanatının yanı sıra gümüş
            işlemeciliği, şarap üretimi gibi zanaatlar da yapılmaktadır. Başlıca
            geçim kaynağı tarım ve hayvancılık olan ilçenin Mardin’e uzaklığı 60
            kilometredir. Taş işleme sanatının güzel örneklerini görmek için
            yurtiçi ve yurtdışından yoğun turist akınına uğrayan ilçede birçok
            dizi ve film çekimi de yapılmıştır. Midyat’ta üretilen doğal Süryani
            Şarapları’na şarapevimiz aracılığıyla ulaşmak için whatsapp sipariş
            hattımızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </>
  );
};
export default Midyat;
