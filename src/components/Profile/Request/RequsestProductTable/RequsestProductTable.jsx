import React from 'react';

const RequsestProductTable = ({ products = [], onRemoveProduct }) => {
  const removeProductHandler = (product) => {
    onRemoveProduct(product.id);
  };

  const emptyTableMessage = (
    <tr>
      <td colSpan={5} rowSpan={5}>
        <div className="brick label warning">
          <p className="t-14 t-bold t-center">No Product Added!</p>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="order-table mb-16">
      <table>
        <thead>
          <tr>
            <th>#Sl</th>
            <th>Name</th>
            <th>Strength</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? emptyTableMessage
            : products.map((product, i) => (
                <tr key={product.id}>
                  <td>{i+1}</td>
                  <td>{product.name}</td>
                  <td>{product.strength}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="add-pro-table brick outline warning small"
                      onClick={removeProductHandler.bind(null, product)}
                    >
                      {/* X */} Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequsestProductTable;
