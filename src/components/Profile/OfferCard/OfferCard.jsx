// import cash from "../../../images/doller.da333190.png";
import './OfferCard.css';
import Card from '../../utilities/Card/Card';

const OfferCard = ({ offer }) => {
  return (
    <div>
      <div className='offer-card-container'>
        <div className='offer-card center-items'>

        <div className="img">
        <img src="/contents/assets/images/special.44bf3ff4.png" alt="" />
      </div>

      <div>
        <h4 className="t-bold t-cash t-20 mb-16">Cashback Offer</h4>
        <p className='t-18'>
        Get 20TK Cashback on your 1000 Tk order
        </p>
      </div>

        </div>

        <div  className='offer-card center-items'>
        <div className="img">
        <img src="/contents/assets/images/special.44bf3ff4.png" alt="" />
      </div>
      <div>
        <h4 className="t-bold t-cash t-20 mb-16">Cashback Offer</h4>
        <p className='t-18'>
        Get 30TK Cashback on your 2000 Tk order
        </p>
      </div>
        </div>
        
      </div>

    </div>

  );
};

export default OfferCard;
