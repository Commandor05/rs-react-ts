import { useCallback, useEffect, useState } from 'react';
import { clientId, baseUrl } from '../configs/api';

const isSearch = (endpoint: string): boolean => {
  return Boolean(endpoint.includes('?'));
};

const useFetch = <T>(
  initialEndpoint: string
): {
  data: T | null;
  isLoading: boolean;
  error: string;
  request: (endpoint?: string | undefined) => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [endpoint, setEndpoint] = useState(initialEndpoint);

  const request = (currentEndpoint?: string | undefined) => {
    if (currentEndpoint) {
      setEndpoint(currentEndpoint);
    }
  };

  const requestData = useCallback(async () => {
    try {
      const suffix = isSearch(endpoint) ? '&' : '?';
      const response = await fetch(`${baseUrl}${endpoint}${suffix}client_id=${clientId}`);
      if (!response.ok) {
        throw Error('Data fetcing error');
      }

      let data = await response.json();

      if (isSearch(endpoint)) {
        data = data.results as T;
      }

      setData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e?.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (endpoint) {
      setIsLoading(true);
      setError('');
      requestData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestData]);

  return { data, isLoading, error, request };
};

export default useFetch;
