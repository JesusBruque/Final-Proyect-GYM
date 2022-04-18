const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: false,
      loggedUser: [],
      customers: [],
      trainers: [],
      physios: [],
      workers: [],
      classes: [],
      events: [],
    },
    actions: {
      setLogged: (boolean) => {
        const store = getStore();
        setStore({ ...store, logged: boolean });
      },
      setLoggedUser: (data) => {
        const store = getStore();
        setStore({ ...store, loggedUser: data });
      },
      setCustomers: (data) => {
        const store = getStore();
        setStore({ ...store, customers: data });
      },
      setTrainers: (data) => {
        const store = getStore();
        setStore({ ...store, trainers: data });
      },
      setPhysios: (data) => {
        const store = getStore();
        setStore({ ...store, physios: data });
      },
      setWorkers: (data) => {
        const store = getStore();
        setStore({ ...store, workers: data });
      },
      deleteLoggedUser: () => {
        const store = getStore();
        setStore({ ...store, loggedUser: [] });
      },
      setClasses: (data) => {
        const store = getStore();
        setStore({ ...store, classes: data });
      },
      setEvents: (data) => {
        const store = getStore();
        setStore({ ...store, events: data });
      },
    },
  };
};

export default getState;
