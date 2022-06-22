import "./PrescriptionCard.css";
import { Link } from "react-router-dom";
// import prescription1 from "../../../images/blog/b3.jpg";
import Card from "../../utilities/Card/Card";

const PrescriptionCard = () => {
  return (
    <Card className="prescription-card flex column justify-between align-center round-corner p-16">
      <div className="img mb-8">
        <img
          src="/contents/assets/images/blog/b3.jpg"
          alt=""
          className="w-max"
        />
      </div>
      <div className="mb-12">
        <Link
          className="t-bold t-14 t-primary mb-4 kill-anchore block"
          to={`/prescription/${undefined}`}
        >
          Prescription Title
        </Link>
        <p className="t-14">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="flex justify-end align-center gc-4 w-full">
        <button className="primary brick fill round-corner small">Order</button>
        <button className="danger brick fill round-corner small">Remove</button>
      </div>
    </Card>
  );
};

export default PrescriptionCard;
