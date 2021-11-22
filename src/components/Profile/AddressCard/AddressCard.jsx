import Button from "../../utilities/Button/Button";
import Card from "../../utilities/Card/Card";

const AddressCard = ({
  address,
  onEditHandler,
  onDeleteHandler,
  onSetPrimaryHandler,
}) => {
  const timeHumanizer = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  return (
    <Card className="mb-16 bg-background round-corner overflow-hidden">
      <div className="flex justify-between bg-gray p-16">
        <h4 className="t-bold">{address.title}</h4>
        <p>{timeHumanizer(address.time)}</p>
      </div>
      <div className="p-16">
        <p>{address.address}</p>
      </div>
      <div className="flex justify-end align-center gc-4">
        <Button
          type="button"
          text="&#x2713; &nbsp; Set as Primary"
          buttonClasses={["primary brick fill rounded-corner small"]}
          click={() => onSetPrimaryHandler(address)}
        />
        <Button
          type="button"
          text="&#x1F589; &nbsp; Edit Address"
          buttonClasses={["warning brick fill rounded-corner small"]}
          click={() => onEditHandler(address)}
        />
        <Button
          type="button"
          text="&#9932; &nbsp; Delete"
          buttonClasses={["danger brick fill rounded-corner small"]}
          click={() => onDeleteHandler(address)}
        />
      </div>
    </Card>
  );
};

export default AddressCard;
