import { lazy, Suspense } from "react";
import Loading from "../Loading";

const OrderImg = lazy(() => import("./OrderImg"));
const MyMap = lazy(() => import("../../MyMap"));

const Order = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='product-container'>
        <OrderImg />

        <div className='info'>
          <div className='info-box'>
            <h6 className='blog-text-header'>ILETISIM</h6>

            <div className='blog-content'>
              <p>
                Akçakaya mahallesi, Kocamanoğlu Caddesi No:16K Ömür Süryani
                Şarap Evi
              </p>
              <p>Mardin / Midyat</p>
              <p>0537 397 2468</p>
              <p>omursuryanisarapevi@gmail.com</p>
            </div>
          </div>
          <div className='info-box'>
            <h6 className='blog-text-header'>KONUMUMUZ</h6>

            <MyMap />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default Order;
