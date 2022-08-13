import axios from 'axios';
import React, {
	useState,
	useEffect
} from 'react';
import { withRest } from './withRest';

axios.defaults.baseURL = 'https://62f69bda612c13062b51f64a.mockapi.io/api/v1';


const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component,resourceId, resourcePath, resourceName) => {

	return withRest(props => { 
		
		const { get, post, put, doDelete } = props;
		const [originalData, setOriginalData] = useState(null);
		const [data, setData] = useState(null);

		useEffect(() => {
			(async () => {
				const response = await get(`${resourcePath}/${resourceId}`);
				setOriginalData(response.data);
				setData(response.data);
			})();
		}, []);

		const onChange = changes => {
			setData({
				...data,
				...changes
			});
		}

        const onReset = () => {
			setData(originalData);
		}

		const onSave = async () => {
			const response = await put(`${resourcePath}/${resourceId}`, data);
			setOriginalData(response.data);
			setData(response.data);
		}

		const resourceProps = {
			[resourceName]: data,
			[`onChange${capitalize(resourceName)}`]: onChange,
			[`onSave${capitalize(resourceName)}`]: onSave,
			[`onReset${capitalize(resourceName)}`]: onReset,
		}

		return <Component {	...props} {...resourceProps	}/>
	})
}