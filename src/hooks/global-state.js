import { createContext, useState, useContext, useEffect } from "react";

const GlobalStateContext = createContext();

const shallowEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!Object.is(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};

const GlobalStateProvider = ({ initialState, children, persist }) => {
  const [state, setState] = useState(() => {
    let storedState;
    if (typeof window !== "undefined" && persist) {
      storedState = localStorage.getItem("global-state");
    }

    if (storedState) {
      try {
        storedState = JSON.parse(storedState);
      } catch (error) {
        console.error(`Error parsing stored state: ${error}`);
        storedState = initialState;
      }
    }

    if (storedState && !shallowEqual(storedState, initialState)) {
      console.log(
        "Using stored state instead of initial state for global state context."
      );
      return storedState;
    }

    return initialState;
  });

  useEffect(() => {
    if (persist) {
      localStorage.setItem("global-state", JSON.stringify(state));
    }
  }, [persist, state]);

  const updateGlobalStateItem = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const addGlobalStateItem = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const deleteGlobalStateItem = (key) => {
    const { [key]: deletedValue, ...rest } = state;
    setState(rest);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        globalState: state,
        updateGlobalStateItem,
        addGlobalStateItem,
        deleteGlobalStateItem,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
