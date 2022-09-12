import axios from 'axios';
import { API_TIMEOUT, API_URL } from '../../components/constants';

export const READ_DOMESTIC_COVID_STATUS = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});
