import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';

export const useGetData = () => {
  const [contactData, setData] = useState<[]>([]);

  async function handleDataFetch() {
    try {
      const result = await server_calls.get();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    handleDataFetch();
  }, []);

  return { contactData, getData: handleDataFetch };
};

export {};
