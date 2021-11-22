// import cash from "../../../images/doller.da333190.png";
import './OfferCard.css';
import Card from '../../utilities/Card/Card';

const OfferCard = ({ offer }) => {
  return (
    <div>
    <Card className="offer-card bg-background round-corner p-8 flex gc-16">
      <div className="img">
        <img src="/contents/assets/images/doller.da333190.png" alt="" />
      </div>
      <div>
        <h4 className="t-bold t-cash t-20 mb-16">Cashback Offer</h4>
        <p className='t-18'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolorum officiis rem beatae eveniet.
        </p>
      </div>
    </Card>

    </div>

  );
};

export default OfferCard;
