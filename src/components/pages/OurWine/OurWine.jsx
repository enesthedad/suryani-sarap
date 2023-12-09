import { lazy, Suspense, useState } from "react";
import Loading from "../Loading";

// LAZY IMPORTS
const Detail = lazy(() => import("../Detail"));
const Products = lazy(() => import("../../Products"));
const OurWineImg = lazy(() => import("./OurWineImg"));
const NewLanding = lazy(() => import("../NewLanding"));
const wineLib = [
  {
    id: 1,
    wineName: "Shiluh Mesopotamia Suryani Sarabi",
    color: "#7d1128",
    definition:
      "Ben Boğazkere üzümü! Altı bin yıl önce Mezopotamya topraklarında doğdum. Atalarımdan Arami ve Asuriler güzel şaraplar yaptı. Onların Süryani torunları mirasımı sürdürüyor. Gılgameş kadar güçlüdür gövdem. Onun ölümsüzlük arayışına katılacak kadar uzun ömürlüyüm. Kiraz, karanfil ve okaliptus kokarım. Karadut, incir aromalarım, belirgin tanenlerim, uzun bitişim ve koyu yakut rengim mutluluk ve güven verir. Shiluh Mesopotamia siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilir ve siparişinizi kolaylıkla oluşturabilirsiniz. ",
    type: " Boğazkere",
    percentage: "%14",
    volume: "75CL-750ML",
  },
  {
    id: 2,
    wineName: "Shiluh Manastır Süryani Şarabı",
    color: "#800000",
    definition:
      "Shiluh'un en gözde şaraplarından. Oldukça koyu bordo renklidir. Damakta dolgun ve güçlü, diri asitlidir. Son derece dikkat çekici güçlü tanenlere tatlı siyah meyve aromaları eşlik ediyor. Ödüllü bir şarap çeşididir aynı zamanda. Shiluh Manastır Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: " Boğazkere",
    percentage: "%14",
    volume: "75CL-750ML",
  },
  {
    id: 3,
    wineName: "Shiluh Turabdin Süryani Şarabı",
    color: "#510400",
    definition:
      "Shiluh'un en beğenilen ürünlerinden, Shiluh Turabdin Süryani Şarabı. Canlı ve parlak koyu bordo görünümlü, burunda toprak, mürdüm eriği, soğuk demli çay kokusu bırakır. Damakta da kırmızı meyve tatlarına vanilya eşlik ediyor. Güçlü ve kaliteli tanenleri, orta asiditesiyle son derece dikkat çekici. Aynı zamanda ödüllü de bir şarap çeşidi olan Shiluh Turabdin Süryani Şarabı siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: " Boğazkere",
    percentage: "%13",
    volume: "75CL-750ML",
  },
  {
    id: 4,
    wineName: "Shiluh Mazrona Süryani Şarabı",
    color: "#EEEDC4",
    definition:
      "Shiluh Mazrona Süryani Şarabı son 100 yıldır sadece Midyat Bölgesi'nde yetişen Mazrona üzümünden monosepaj olarak üretilmekte. Açık renkli, yeşil elma ve narenciye aromaları ile diri ve yumuşak içimli bir şarap çeşididir. Balıklar, beyaz etler, deniz mahsulü salatalar ile uyum göstermekte. Soğuk servis edilmesi gereken Shiluh Mazrona'nın 12-15 derecede yatık olarak saklanması önerilir. Shiluh Mazrona Beyaz Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: "Mazrona",
    percentage: "%14",
    volume: "75CL-750ML",
  },
  {
    id: 5,
    wineName: "Shiluh Dara Süryani Şarabı",
    color: "#7d1128",
    definition:
      "Shiluh'un en özel şaraplarından ve aromalı tek şarap çeşidi aynı zamanda. Mahlepli süryani şarabı.. Mahlep aroması içeren Shiluh Dara Süryani Şarabı boğazkere ve öküzgözü üzümlerinden üretilmekte. Yoğun mahlep, tarçın ve karadut aromalarına tatlı baharatlar eşlik ediyor. Belirgin tanen ve orta asiditeye sahip bir şarap çeşidi olan Shiluh Dara Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: "Boğazkere - Öküzgözü",
    percentage: "%12.5",
    volume: "75CL-750ML",
  },
  {
    id: 6,
    wineName: "Shiluh Ninve Süryani Şarabı",
    color: "#c32148",
    definition:
      "Canlı ve bordo görünümlü, güçlü animal tonlar, vişne ve kuşburnu çağrışımları. Orta gövde ve yüksek asiditeye sahip, öküzgözü ağırlıklı bir kupaj. Alkol oranı %12.5 olan Shiluh Ninve Süryani Şarabı aynı zamanda ödüllü bir şarap çeşidimizdir. Shiluh ninve şarap siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.  ",
    type: "Boğazkere - Öküzgözü",
    percentage: "%12.5",
    volume: "75CL-750ML",
  },
  {
    id: 7,
    wineName: "Shiluh Verdo Süryani Şarabı",
    color: "#F4C4BB",
    definition:
      "Shiluh firmasına ait tek roze şarap çeşidi olan Shiluh verdo süryani şarabı, öküzgözü üzümlerinden üretilmekte. Burunda çiçeksi tonlar damakta kırmızı meyve aromaları ile ferahlatıcı uzun bitişli bir şaraptır. Diğer roze şaraplar gibi soğuk servis edilir. Shiluh verdo şarap siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilir, detaylı bilgi alabilirsiniz. ",
    type: "Öküzgözü",
    percentage: "%12.5",
    volume: "75CL-750ML",
  },
  {
    id: 8,
    wineName: "Shiluh Klasik Süryani Şarabı",
    color: "#B52C37",
    definition:
      "Parlak yakut görünümlü. Burunda hafif yeşil biber çağrışımları, tam olgunlaşmamış böğürtlen. Yuvarlak tanenler ve orta asiditeye sahip. Shiluh klasik süryani şarabı ile ilgili detaylı bilgi ve fiyat bilgisine ulaşmak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: "Boğazkere - Öküzgözü",
    percentage: "%12.5",
    volume: "75CL-750ML",
  },
  {
    id: 9,
    wineName: "Shiluh Kustan Süryani Şarabı",
    color: "#f9e8c0",
    definition:
      "Shiluh kustan beyaz süryani şarabı, Shiluh firmasına ait 2 beyaz şaraptan biri. Açık parlak sarı renge ve dolgun gövdeli bir içime sahip. Yanında ızgara balık, ızgara tavuk ve taze peynir ile tüketilebilir. Shiluh kustan beyaz süryani şarabı siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: "Mazrona - Kerküş",
    percentage: "%13",
    volume: "75CL-750ML",
  },
  {
    id: 10,
    wineName: "Shiluh Hamro Süryani Şarabı",
    color: "#c24852",
    definition:
      "Mardin ve çevresinde yetişen boğazkere ve öküzgözü üzümlerinin doğal fermantasyonuyla üretilmiştir. Parlak yakut görünümlü ve yuvarlak tanenli bir içime sahiptir. Alkol oranı %12.5 olan Shiluh Hamro Süryani Şarabı'nın yatık olarak saklanması önerilir. Shiluh hamro şarap siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz. ",
    type: "Boğazkere - Öküzgözü",
    percentage: "%12.5",
    volume: "75CL-750ML",
  },
];
const OurWines = () => {
  const [wineVisible, setWineVisible] = useState(false);
  const [selectedWine, setSelected] = useState(null);
  const handleWineClick = (id) => {
    setSelected(wineLib[id - 1]);
    setWineVisible(!wineVisible);
    console.log(selectedWine);
  };
  return (
    <Suspense fallback={<Loading />}>
      <div className='product-container'>
        <NewLanding />
        <OurWineImg />

        <div className='padding'>
          {wineVisible ? (
            <Detail handleWineClick={handleWineClick} wine={selectedWine} />
          ) : (
            <Products wineLib={wineLib} handleWineClick={handleWineClick} />
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default OurWines;
