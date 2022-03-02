const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: [],
    },
    actions: {
      getUsers: () => {
        const store = getStore();
      },
    },
  };
};

export default getState;
