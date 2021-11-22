import './Popup.css';

const Popup = ({ isInitHidden, title, BodyComponent, onClose, children }) => {


    children = children ?? <p>No Body Component Supplied!</p>;

    const close = () => {
        onClose();
    }

  return (
    <div className='overlay__popup show'>
      <div className="popup">
        <div className="popup__title">
          <h2>{title}</h2>
          <div onClick={close}>🗙</div>
        </div>
        <div className="popup__body">
          {BodyComponent ? <BodyComponent /> : children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
