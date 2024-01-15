import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface UserData {
  me: {
    firstname: string | null;
    lastname: string | null;
    birthdate: string | null;
    countryFlagIcon: string | null;
    age: number | null;
    profileImage: string | null;
    workPosition: string | null;
    companyName: string | null;
  };
}

interface AppData {
  app: {
    cursorHoverType: string;
    isPhone: boolean;
  };
}

interface DataContextType {
  user: UserData;
  app: AppData;
  setCursorHoverType: (type: string) => void;
}

export const DataContext = createContext<DataContextType | null>(null);


const userData: UserData = {
  me: {
    firstname: "Robin",
    lastname: "Bezak",
    birthdate: "1999-05-24",
    countryFlagIcon: "https://placehold.co/400",
    age: 24,
    profileImage: "https://placehold.co/400",
    workPosition: "Junior Frontend Developer",
    companyName: "MIBCON"
  }
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [appState, setAppState] = useState<AppData>({
    app: {
      cursorHoverType: "default",
      isPhone: false,
    }
  });

  const setCursorHoverType = (type: string) => {
    setAppState(prevState => ({
      ...prevState,
      app: {
        ...prevState.app,
        cursorHoverType: type,
      },
    }));
  };

  useEffect(() => {
    const detectTouchDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setAppState(prevState => ({
        ...prevState,
        app: {
          ...prevState.app,
          isPhone: isTouchDevice,
        },
      }));
    }

    detectTouchDevice();
  }, []);

  const contextValue = {
    user: userData,
    app: appState,
    setCursorHoverType,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
