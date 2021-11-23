import InputControl from "../../utilities/InputControl/InputControl";
import Button from "../../utilities/Button/Button";
import Card from '../../utilities/Card/Card';

const Complain = () => {
  return (
    <Card className='mt-8'>
      <div className="form__control mb-16">
        <InputControl name={"complain-title"} label={"Title"} />
      </div>
      <div className="form__control mb-16">
        <div className="form__control--text-area h-100p">
          <label htmlFor="remarks">Remarks</label>
          <textarea name="remarks" id="remarks"></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          text="Send"
          icon="/contents/assets/images/plane.ea6d3406.svg"
          buttonClasses={["submit-compline-new primary brick fill rounded-corner flex gc-8 icon-small"]}
        />
      </div>
    </Card>
  );
};

export default Complain;
