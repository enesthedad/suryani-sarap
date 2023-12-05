import assyrianPhoto from "../../images/assyrian-wine.jpg";

const AssyrianWine = () => {
  return (
    <div className='product-container'>
      <div className='product-header'>
        <img className='product-img' src={assyrianPhoto} alt='' />
        <h5 className='product-header-title'>SURYANI SARABI</h5>
      </div>
      <div className='blog-text'>
        <h5 className='blog-text-header'>Süryani Şarabı nedir?</h5>
        <p>
          Süryani şarabı, Mezopotamya Bölgesi'nde binlerce yıldır yaşamakta olan
          ve kadim bir halk olan Süryani'lerin büyük bir özveri ve titizlikle
          ürettikleri, içerisinde herhangi bir katkı-koruyucu madde içermeyen
          doğal bir şarap çeşididir. Süryani şarabı, yüzyıllar boyunca Süryani
          Toplumu tarafından; gerek özel günler, gerek ayinler, gerekse dost
          meclislerinde sunulmak amacıyla üretilmiştir. Binlerce yıl önce
          kullanılan geleneksel yöntemlerin, teknolojinin getirdiği yeniliklerle
          harmanlanması sonucu doğallığından ve kalitesinden ödün vermeden
          üretilen süryani şaraplarını, süryani şarap evi 'mizde siz değerli
          şarap severlerin beğenisine sunmaktayız.
        </p>
        <h5>Süryani Şarabı Çeşitleri Nelerdir?</h5>
        <p>
          Geçmişin Tanrı'larından günümüz insanlarına kadar her daim tercih
          edilen bir içecek olan şarabı, özüne bağlı kalarak üretmekte olan
          Midyat Süryanileri, civar köylerde aynı zamanda bağcılık yapmakta ve
          yetiştirdikleri üzümleri süryani şarabı üretiminde kullanmaktadırlar.
          Bir beyaz üzüm çeşidi olan "mazrona" ve "kerküş" cinsi üzümlerden
          beyaz süryani şarabı, kırmızı üzüm çeşidi olan "hınwe kome" cinsinden
          ise kırmızı süryani şarabı üretilmektedir. Ayrıca kırmızı süryani
          şarabına katılan mahlep aromasıyla üretilmekte olan mahlepli süryani
          şarabı çeşidi de bulunmaktadır.
        </p>
      </div>
    </div>
  );
};

export default AssyrianWine;
