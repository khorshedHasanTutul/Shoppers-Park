import './Button.css';

const Button = ({ icon, text, isActive, options, buttonClasses, click, ...rest }) => {
  const imgClasses = (icon ? 'icon' : 'none') + ' monami-button__icon';
  const classNameBuilder = () => {
    let classes = [];
    for (const key in options) {
      classes.push(`${key}-${options[key]}`);
    }

    return classes.join(' ');
  };
  buttonClasses = [
    'monami-button',
    classNameBuilder(),
    ...(buttonClasses || []),
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      type={options?.nativeType || 'button'}
      disabled={isActive ?? false}
      {...rest}
      onClick={click}
    >
      {icon && (
        <img src={icon} alt={icon} className={imgClasses} />
      )}

      {text && <span className='monami-button__text'>{text}</span>}
    </button>
  );
};

export default Button;

// icon: button icon _optional
// text: button text _optional
// type: [primary], secondary, success, warning, danger, info, default
// style: [fill], outline, link, text
// shape: oval, round, square, rounded, [right-angle]
// size: small, mid, [normal], big, large, extra-large
// hover: lift, [flat]
// length: wide, narrow, [normal], fat, supper-fat
// isActive: [true], false
