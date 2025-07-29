import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

export function usePopularMovies() {
  return useQuery({queryKey: ['popularMovies'], queryFn: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  }});
}
