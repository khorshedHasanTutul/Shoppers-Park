import styles from "./Card.module.css";

const Card = ({ className, onClick, children, ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

export default Card;
