import axios from "axios";

const API_URL = 'http://localhost:3000/api';

/** Guarda un token de usuario */
export async function saveNewUserToken(token: string) {
  const response = await axios.post(`${API_URL}/user`, { token });
  return response;
}