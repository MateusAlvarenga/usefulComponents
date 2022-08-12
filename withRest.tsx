import axios from 'axios';
import React from 'react';

axios.defaults.baseURL = 'https://62f69bda612c13062b51f64a.mockapi.io/api/v1';

export const withRest = (Component) => {
    
	return props => {

		const get = async (path) => {
			return axios.get(path);                 
		}

		const post = async (path, payload) => {
			return axios.post(path, payload);
        }

        const put = async (path, payload) => {
			return axios.put(path, payload);
		}

        const doDelete = async (path) => {
			return  axios.delete(path);          
		}

		const resourceProps = {		 
			[`get`]: get,
			[`post`]: post,
			[`put`]: put,			 
			[`doDelete`]: doDelete,			 
		}

		return <Component {
			...props
		} {
			...resourceProps
		}
		/>
	}
}