import Card from "../utilities/Card/Card";

const AddressList = () => {
  return (
    <div>
      <h3 className="t-uppercase t-14 mb-8">Saved Addresses</h3>
      <Card className="mb-16 hover-card pointer">
        <h4 className="t-16 t-bold mb-8">HOME</h4>
        <p className=" mb-4">Iqrasys Solution(01723658452)</p>
        <p className="mb-4">Mirpur 12, Dhaka City, Dhaka</p>
        <p>House 858, Road 12, Avenue 3, Mirpur DOHS</p>
      </Card>
      <Card className="mb-16 hover-card pointer">
        <h4 className="t-16 t-bold mb-8">OFFICE</h4>
        <p>No Address saved in Office slot</p>
      </Card>
      <Card className="mb-16 hover-card pointer">
        <h4 className="t-16 t-bold mb-8">HOME TOWN</h4>
        <p>No Address saved in Home Town slot</p>
      </Card>
    </div>
  );
};

export default AddressList;
