import { use } from 'react';
import axios from 'axios';

const fetchCountryCode = async () => {
  try {
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const { ip } = ipResponse.data;

    const countryResponse = await axios.get(
      `https://ipinfo.io/${ip}?token=a1de4b6d03b20a`,
    );

    return countryResponse.data.country.toLowerCase();
  } catch (error) {
    console.error('Error fetching country code:', error);
    return 'us';
  }
};

export const useCountryCode = () => use<string>(fetchCountryCode());
