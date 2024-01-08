import CInfo, { CInfoType, InfoType } from '@/features/info/CInfo.ts';
import { createContext, JSX, useContext } from 'react';

const infoContext = createContext<CInfoType>({
  type: InfoType.INFO,
  message: '',
  heading: '',
  show: false,
  hideMessage: () => {},
  showMessage: () => {},
});

const InfoProvider = ({ children }: { children: JSX.Element }) => {
  const info = CInfo();
  return <infoContext.Provider value={info}>{children}</infoContext.Provider>;
};

const useInfo = () => useContext(infoContext);

export { useInfo, InfoProvider };
