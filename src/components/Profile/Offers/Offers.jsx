import OfferCard from '../OfferCard/OfferCard';

const Offers = ({ offers }) => {
  if (offers.length === 0) {
    return (
      <div className="brick label info">
        <p className="t-14 t-bold t-center">Currenlty No offer Available</p>
      </div>
    );
  }

  return (
      <div className='mt-8'>
          {offers.map(offer => <OfferCard offer={offer} key={offer.id} />)}
      </div>
  );
};

export default Offers;
