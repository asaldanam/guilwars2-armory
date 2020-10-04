import axios from "axios";

const URL_PATH = "https://reqres.in/api";


/** Devuelve el listado de usuarios */
export async function fetchUsers(page?: number) {
  const response = await axios.get(
    `${URL_PATH}/users${page && `?page=${page}`}`
  );
  return response;
}

/** Devuelve el detalle de un usuario */
export async function fetchUserDetail(userId: number) {
  const response = await axios.get(`${URL_PATH}/users/${userId}`);
  return response;
}