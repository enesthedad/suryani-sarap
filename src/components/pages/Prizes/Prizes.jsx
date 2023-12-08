import { lazy, Suspense } from "react";
import Loading from "../Loading";
const PrizesImg = lazy(() => import("./PrizesImg"));

const Prizes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='product-container'>
        <PrizesImg />
        <div className='blog-text'>
          <ul>
            <li>Shiluh Manastır Süryani Şarabı - 2017 CMC Silver</li>
            <li>Shiluh Turabdin Süryani Şarabı - 2017 CMC Silver</li>
            <li>Shiluh Manastır Süryani Şarabı - 2021 Sommeliers Selection</li>
            <li>Shiluh Ninve Süryani Şarabı - 2021 Sakura Japan Gold</li>
            <li>Shiluh Turabdin Süryani Şarabı- 2021 Sakura Japan Silver </li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
};
export default Prizes;
