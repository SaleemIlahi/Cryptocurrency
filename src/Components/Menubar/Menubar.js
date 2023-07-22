import "./menubar.css";

const Menubar = () => {
  return (
    <div className="menubar" id="menubar">
      <div className="logo_cnt">
        <img
          src="https://res.cloudinary.com/do63p55lo/image/upload/v1689508770/crypto/logo100_gnhpmq.png"
          alt="brand logo"
        />
        <h4 className="logo_text">Cryptocurrency</h4>
      </div>

      <div className="menu_navigation">
        <div className="trending icon">
          <img
            src="https://res.cloudinary.com/do63p55lo/image/upload/v1689520789/crypto/icon/trending_white_sz3nu9.png"
            alt="trending_icon"
          />
          <span>Trending</span>
        </div>
        <div className="currency icon">
          <img
            src="https://res.cloudinary.com/do63p55lo/image/upload/v1689525932/crypto/icon/currency_white_qm5eig.png"
            alt="currency_icon"
          />
          <span>Currency</span>
        </div>
        <div className="categories icon">
          <img
            src="https://res.cloudinary.com/do63p55lo/image/upload/v1689526425/crypto/icon/categories_white_wdu4yj.png"
            alt="categories_icon"
          />
          <span>Categories</span>
        </div>
        <div className="exchange icon">
          <img
            src="https://res.cloudinary.com/do63p55lo/image/upload/v1689526994/crypto/icon/exchange_white_citzbe.png"
            alt="exchange_icon"
          />
          <span>Exchange</span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
