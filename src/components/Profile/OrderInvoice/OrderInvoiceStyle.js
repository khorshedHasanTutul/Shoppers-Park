const style = `
.order-invoice-ea .custom-row-top .span4 img {
    width: 200px;
    height: auto;
}
.order-invoice-ea .invoice-head td {
    padding: 0 8px;
}
.order-invoice-ea .container {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 35px;
}
.order-invoice-ea .invoice-body {
    background-color: transparent;
}
.order-invoice-ea .invoice-thank {
    margin-top: 60px;
    padding: 5px;
}
.order-invoice-ea address {
    margin-top: 15px;
}
.order-invoice-ea .custom-row-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-invoice-ea .span8 {
    width: 620px;
}
.order-invoice-ea .well {
    min-height: 20px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}

.order-invoice-ea .custom-row-top .well {
    padding: 20px;
}

.order-invoice-ea .invoice h2 {
    font-size: 30px;
    font-weight: 500;
    display: block;
    padding-top: 20px;
    padding-bottom: 15px;
}

.order-invoice-ea .cask-rewarded span {
    font-size: 24px;
    font-weight: 400;
    color: #000;
}

.order-invoice-ea .cask-rewarded p {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    display: block;
    padding-bottom: 20px;
}

.order-invoice-ea .footer-row {
    padding: 30px;
}

.order-invoice-ea .cask-rewarded h5 {
    font-size: 22px;
    font-weight: 500;
    color: #000;
}

.order-invoice-ea .invoice-body {
    background-color: transparent;
}

.order-invoice-ea .table-bordered {
    border: 1px solid #ddd;
    border-collapse: separate;
    *border-collapse: collapse;
    border-left: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}

.order-invoice-ea .table {
    width: 100%;
    margin-bottom: 20px;
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
}

.order-invoice-ea .table thead th {
    vertical-align: bottom;
}

.order-invoice-ea .table-bordered th,
.order-invoice-ea .table-bordered td {
    border-left: 1px solid #ddd;
}
.order-invoice-ea .table th,
.order-invoice-ea .table td {
    padding: 4px 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-size: 16px;
    font-weight: 400;
}
.table th {
    font-weight: bold;
}

.order-invoice-ea .table-bordered th,
.order-invoice-ea .table-bordered td {
    border-left: 1px solid #ddd;
}

.order-invoice-ea strong {
    font-weight: 600;
}

.order-invoice-ea .cask-rewarded {
    text-align: center;
}

.order-invoice-ea .custom-row-top address h2 {
    font-weight: 500;
    display: block;
    font-size: 24px;
    color: #000;
    margin-bottom: 7px;
}
.order-invoice-ea .sum-table-for-invoice {
    display: flex;
    justify-content: end;
}
.order-invoice-ea .table.table-bordered.small-table-sum {
    flex: 0 0 350px;
}
.order-invoice-ea .SubTotal-tab {
    width: 80px;
}

img.print{
    display: none;
}

@media print{
    .page{
        width: 8.3in;
        height: 11.7in;
        padding: 0.5in;
    }
    img.print{
        display: block;
    }
    img.no-print{
        display: none;
    }
}

`;

export default style;