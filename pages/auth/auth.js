import { getCookie } from './cookies';
import jwtDecode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = getCookie('laurusToken');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return false;
  }
};
