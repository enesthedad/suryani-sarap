import googleIcon from "../../../images/icons/google.png";
import tripAdvisorIcon from "../../../images/icons/tripadvisor.png";
import circleIcon from "../../../images/icons/new-moon.png";
import halfIcon from "../../../images/icons/contrast.png";

const LightComment = () => {
  return (
    <div className='light-comment-container'>
      <div className='light-comment-top-container'>
        <div className='light-comment-top'></div>
        <div className='comments'>
          <h2 className='light-comment-header'>MUTLU MUSTERILER</h2>
          <div className='sites'>
            <div className='comment-point'>
              <div className='comment-sites'>
                <img src={googleIcon} alt='' />
                <h4>GOOGLE</h4>
              </div>
              <div className='comment-sites-points'>
                <img src={circleIcon} alt='' />

                <img src={circleIcon} alt='' />
                <img src={circleIcon} alt='' />
                <img src={circleIcon} alt='' />
                <img src={circleIcon} alt='' />
              </div>
            </div>
            <div className='comment-point'>
              <div className='comment-sites'>
                <img src={tripAdvisorIcon} alt='' />
                <h4>TRIPADVISOR</h4>
              </div>
              <div className='comment-sites-points'>
                <img src={circleIcon} alt='' />

                <img src={circleIcon} alt='' />
                <img src={circleIcon} alt='' />
                <img src={circleIcon} alt='' />
                <img src={halfIcon} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LightComment;
