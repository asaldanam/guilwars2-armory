type literals = { [key: string]: string };
export interface ILiteralsState {
  errorMessages: literals;
  topbar: literals;
  VSignIn: literals;
  VList: literals;
  VDetail: literals;
}

/** STATE */
const initialState: ILiteralsState = {
  errorMessages: {
    required: "El campo es requerido",
    email: "No es un email válido",
  },
  topbar: {
    goBack: "Volver",
    signOut: "Salir",
  },
  VSignIn: {
    errorServer: "Error crítico del sistema. Inténtelo más tarde",
    errorAuth: "El usuario no existe. Usa eve.holt@reqres.in",
    submitButtonTxt: "Acceso",
    emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña",
  },
  VList: {
    title: "Listado de usuarios",
    nextBtnTxt: "Siguiente página",
    prevBtnTxt: "Página anterior",
    errorNotFound: "No existen usuarios para la página solicitada",
    errorCritical:
      "Error crítico al recuperar el listado, por favor inténtelo más tarde",
    ofTxt: "de",
  },
  VDetail: {
    nameLabel: "Nombre",
    surnameLabel: "Apellido",
    emailLabel: "Correo electrónico",
    updateBtn: "Actualizar",
    deleteBtn: "Eliminar",
    lastUpdated: "Ultima actualización:",
    notUpdatedYet: "No actualizado aun",
    errorNotFound: "No existe usuario por el id solicitado",
    errorCritical:
      "Error crítico al recuperar el usuario, por favor inténtelo más tarde",
    userNotFound:
      "El usuario con el id solicitado no existe o no ha sido encontrado",
  },
};

/** REDUCERS */
const literals = function (state = initialState, action: any) {
  return state;
};

export default literals;
