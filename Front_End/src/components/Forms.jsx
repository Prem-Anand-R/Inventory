import InwardForm from '../Form/InwardForm';
import OutwardForm from '../Form/OutwardForm';
import CustomersForm from '../Form/CustomersForm';
import ProductlistForm from '../Form/ProductlistForm';

function Forms({ data }) {
    let formData = ''

    switch (data) {
        case 'Inward':
            formData =
                <InwardForm />
            break;
        case 'Outward':
            formData =
                <OutwardForm />
            break;
        case 'Customer':
            formData =
                <CustomersForm />
            break;
        case 'Product List':
            formData =
                <ProductlistForm />
            break;
    }
    return (
        <diV>{formData}</diV>
    );
}

export default Forms;



