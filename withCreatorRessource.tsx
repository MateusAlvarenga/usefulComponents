import axios from 'axios';
import React, {
    useState
} from 'react';
import toast from 'react-hot-toast';
import { withRest } from './withRest';

axios.defaults.baseURL = 'https://62f69bda612c13062b51f64a.mockapi.io/api/v1';



export const withCreatorRessource = (Component, resourcePath, resourceName) => {

    const capitalized = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);

    return withRest(props => {

        const { post } = props;

        const [data, setData] = useState(null);

        const onSave = async ({ formData }) => {

            return toast.promise(
                post(`${resourcePath}/`, formData).then(response => {
                    setData(response.data)
                }),
                {
                    loading: 'Saving...',
                    success: <b>{capitalized} saved!</b>,
                    error: <b>Could not save {capitalized}.</b>,
                }
            );
        }

        const resourceProps = {
            [resourceName]: data,
            [`onSave${capitalized}`]: onSave
        }

        return <Component {...props} {...resourceProps} />
    })
}