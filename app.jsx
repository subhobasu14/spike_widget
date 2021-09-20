import { InputField } from './InputField.js';
import { ProductList } from './ProductList.js';
import { repairProducts } from './repair-products.js'

function Hello(props) {
    const pathname = window.location.href;
    console.log("Path is ", pathname);

    const [products, setProducts] = React.useState(repairProducts);
    const [selectedProductName, setSelectedProductName] = React.useState(
        products[0].name
    );
    const [zip, setZip] = React.useState('');
    const NUMBER_REGEX = /[^0-9]/g;
    const validateZip = (event) => {
        
        event.currentTarget.value = event.currentTarget.value.replace(
          NUMBER_REGEX,
          ''
        );
        setZip(event.currentTarget.value);
      };
    
      const changeProduct = (event) => {
        
        setSelectedProductName(event.currentTarget.value);
      };
    const parameterisedSchedulerUrl = () =>
    `/scheduler/beta/shs?serviceType=${
      cleanMaintain ? 'M' : 'R'
    }&productName=${selectedProductName}&zipCode=${zip}`;
    
    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: '0 auto',
            backgroundColor: 'transparent',
            width: '100%',
            maxWidth: '350px',
            height: '450px',
        },
        content: {
            top: '7%',
            left: 0,
            right: 0,
            bottom: '2%',
            borderTopColor: '#00AAFF',
            borderTopWidth: '5px',
            minHeight: '100px',
            paddingLeft: 0,
            paddingRight: 0,
        },
    };
    ReactModal.setAppElement('body');

    return (
        <>
            <ReactModal
                isOpen={true}
                onRequestClose={props.onClose}
                shouldCloseOnOverlayClick={true}
                portalClassName={'SchedulerPopUpPortal'}
                contentLabel={'Book Your Appointment'}
                style={modalStyles}>
                <div align='center'>
                    <img src={props.image} height='70px'></img>
                </div>
                <div align='center'>
                    <h4>SCHEDULE YOUR REPAIR</h4>
                </div>
                <div align='center'>
                    <ProductList name="Go home" />
                </div>
                <br />
                <div align='center'>
                    <InputField name="ZIP Code" />
                </div>
                <br />
                <div align='center'>
                    <a href="http://searshomeservices.com/repair-new" target="_blank">
                        <button>Schedule Now</button>
                    </a>
                </div>
                <br />
                <div align='center'>
                    <input type="checkbox" id="service-type" name="service"/>
                    <label for="service">Schedule maintenance</label>
                </div>

            </ReactModal>


        </>
    );
}

ReactDOM.render(
    <Hello image='./logo.svg' />,
    document.getElementById('root'),
);