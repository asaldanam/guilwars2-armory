import { IUser } from "./user-details.store";

/** STATE */

export interface IUsersState {
  loading?: boolean;
  error?: any;
  page: number;
  total_pages: number;
  data: IUser[] | null;
}

const initialState: IUsersState = {
  loading: false,
  error: null,
  page: 1,
  total_pages: 0,
  data: [],
};

/** ACTIONS */
export const REQUEST_USER_DETAILS = "[USERS LIST] get list";
export const SET_USERS_LIST = "[USERS LIST] set list";
export const SET_USERS_ERROR = "[USERS LIST] set error";

/** ACTION CREATORS */

/** Realiza un GET al listado de usuarios @action
 * @param page página listada
 */
export function getUsers(page?: number) {
  return { type: REQUEST_USER_DETAILS, payload: page };
}

/** Setea el listado de usuarios en el store de Redux @action */
export function setUsersList(usersList: IUsersState) {
  return { type: SET_USERS_LIST, payload: usersList };
}

/** Setea el código de error en el store de Redux @action */
export function setUsersError(error: { message: string; status: number }) {
  return { type: SET_USERS_ERROR, payload: error };
}

/** REDUCERS */
const users = function (state = initialState, action: any): IUsersState {
  switch (action.type) {
    case REQUEST_USER_DETAILS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_USERS_LIST: {
      return {
        ...action.payload,
        loading: false,
        error: null,
      };
    }
    case SET_USERS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        data: null,
      };
    }
    default:
      return state;
  }
};

export default users;
