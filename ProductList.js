import { repairProducts } from './repair-products.js'
const element = React.createElement;

export class ProductList extends React.Component {
  render() {
    return element('select',
      { name: "products", width: "90%" },
      repairProducts.map(function (time, index) {
        let option = element('option', {
          value: time.MerchCode, key: index,
          label: time.name
        }, time.name);
        return option;
      })

    );

  };

}
ReactDOM.render(element(ProductList, null), document.getElementById('root'));