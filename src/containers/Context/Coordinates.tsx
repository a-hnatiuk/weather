import {
  useState,
  FC,
  useMemo,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
} from 'react';

export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface ICoordinatesContext {
  coordinates: ICoordinates;
  setCoordinates: Dispatch<SetStateAction<ICoordinates>>;
}

export const Coordinates = createContext<Partial<ICoordinatesContext>>({});

interface ICoordinatesProvider {
  children?: ReactNode;
}

export const CoordinatesProvider: FC<ICoordinatesProvider> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<ICoordinates>(
    {} as ICoordinates
  );
  const contextValue = useMemo(
    () => ({ coordinates, setCoordinates }),
    [coordinates]
  );

  return (
    <Coordinates.Provider value={contextValue}>{children}</Coordinates.Provider>
  );
};
