'use client';

import { use } from 'react';
import axios from 'axios';

const fetchCountryCode = async (): Promise<string> => {
  try {
    const ipResponse = await axios.get<{ ip: string }>(
      'https://api.ipify.org?format=json',
    );
    const { ip } = ipResponse.data;

    const countryResponse = await axios.get<{ country: string }>(
      `https://ipinfo.io/${ip}?token=a1de4b6d03b20a`,
    );

    return countryResponse.data.country.toLowerCase();
  } catch (error) {
    console.error('Error fetching country code:', error);
    return 'us';
  }
};

const countryCodePromise = fetchCountryCode();

export const useCountryCode = () => use(countryCodePromise);
