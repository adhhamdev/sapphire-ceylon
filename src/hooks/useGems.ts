import { useState, useEffect } from 'react';
import { Gem, GemsResponse } from '../types/gem';

const API_BASE_URL = 'http://localhost:3001/api';

export const useGems = () => {
  const [gems, setGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/gems`);
        if (!response.ok) {
          throw new Error('Failed to fetch gems');
        }
        const data: GemsResponse = await response.json();
        setGems(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGems();
  }, []);

  return { gems, loading, error };
};

export const useFeaturedGems = () => {
  const [featuredGems, setFeaturedGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedGems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/gems/featured`);
        if (!response.ok) {
          throw new Error('Failed to fetch featured gems');
        }
        const data: GemsResponse = await response.json();
        setFeaturedGems(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedGems();
  }, []);

  return { featuredGems, loading, error };
};

export const useGemsByCategory = (category: string) => {
  const [gems, setGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGemsByCategory = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/gems/category/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch gems by category');
        }
        const data: GemsResponse = await response.json();
        setGems(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchGemsByCategory();
    }
  }, [category]);

  return { gems, loading, error };
};