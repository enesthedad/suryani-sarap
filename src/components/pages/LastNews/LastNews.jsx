import blogPic1 from "../../../images/blog-1.jpg";
import blogPic2 from "../../../images/blog-2.jpg";

const LastNews = () => {
  return (
    <div className='last-news'>
      <div className='news-header'>
        <h3>SON EKLENEN HABERLER</h3>
      </div>
      <div className='news'>
        <div className='news-container'>
          <img className='blog-pic' src={blogPic1} alt='1' />
          <div className='news-bottom'>
            <p>Mart 30</p>
            <a href='#'>
              <h5>Suryani Sarabi Secerken Nelere Dikkat Etmeliyiz?</h5>
            </a>
          </div>
        </div>
        <div className='news-container'>
          <img className='blog-pic' src={blogPic2} alt='2' />
          <div className='news-bottom'>
            <p>Subat 12</p>
            <a href='#'>
              <h5>Neden Suryani Sarabi?</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
