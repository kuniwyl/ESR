import ErrorInterface from '@/logic/hooks/errors/ErrorInterface.ts';
import { InfoType } from '@/features/info/CInfo.ts';
import { useInfo } from '@/features/info/InfoContext.tsx';
import { AxiosError } from 'axios';

const useErrorDispatcher = () => {
  const info = useInfo();

  const dispatchAbstractError = (error: ErrorInterface) => {
    console.log(error.Message);
    console.log(error.Exception);

    switch (error.Exception) {
      case 'CreateFailedException':
        info.showMessage(
          'Błąd',
          'Nie udało się utworzyć obiektu',
          InfoType.ERROR,
        );
        break;
      case 'DeleteFailedException':
        info.showMessage(
          'Błąd',
          'Nie udało się usunąć obiektu',
          InfoType.ERROR,
        );
        break;
      case 'DeleteModifyException':
        info.showMessage(
          'Błąd',
          'Nie można usunąć obiektu - obiekt już usunięty',
          InfoType.ERROR,
        );
        break;
      case 'ObjectNotFoundException':
        info.showMessage('Błąd', 'Nie znaleziono obiektu', InfoType.ERROR);
        break;
      case 'SaveFailedException':
        info.showMessage(
          'Błąd',
          'Nie udało się zapisać obiektu',
          InfoType.ERROR,
        );
        break;
      case 'SemestersNotFoundException':
        info.showMessage('Błąd', 'Nie znaleziono semestrów', InfoType.ERROR);
        break;
      case 'UserExistException':
        info.showMessage('Błąd', 'Użytkownik już istnieje', InfoType.ERROR);
        break;
      case 'UserNotFoundException':
        info.showMessage('Błąd', 'Nie znaleziono użytkownika', InfoType.ERROR);
        break;
      case 'ExpiredRefreshTokenException':
        info.showMessage('Błąd', 'Token wygasł', InfoType.ERROR);
        break;
      case 'MapperException':
        info.showMessage('Błąd', 'Błąd mapowania', InfoType.ERROR);
        break;
      case 'NotAuthorizedException':
        info.showMessage('Błąd', 'Brak autoryzacji', InfoType.ERROR);
        break;
      case 'RepositoryException':
        info.showMessage('Błąd', 'Błąd repozytorium', InfoType.ERROR);
        break;
      case 'ValidationException':
        info.showMessage('Błąd', 'Błąd walidacji', InfoType.ERROR);
        break;
      case 'AbstractException':
        info.showMessage('Błąd', 'Błąd abstrakcyjny', InfoType.ERROR);
        break;
      case 'Exception':
        info.showMessage('Błąd', 'Błąd nie obsłużony', InfoType.ERROR);
        break;
      case 'CssLimitException':
        console.log('CssLimitException');
        info.showMessage(
          'Błąd',
          'Przekroczono limit aktualnego przedmiotu',
          InfoType.ERROR,
        );
        break;
      default:
        info.showMessage(
          'Błąd',
          'Błąd nie zaimplementowany ' + error.Exception,
          InfoType.ERROR,
        );
        break;
    }
  };

  const dispatchAxiosError = () => {
    info.showMessage('Błąd', 'Błąd połączenia z serwerem', InfoType.ERROR);
  };

  const dispatchError = (error: AxiosError) => {
    const errDispatch = error.response?.data as ErrorInterface;
    if (errDispatch) {
      dispatchAbstractError(errDispatch);
    } else {
      dispatchAxiosError();
    }
  };

  return {
    dispatchError,
  };
};

export default useErrorDispatcher;
