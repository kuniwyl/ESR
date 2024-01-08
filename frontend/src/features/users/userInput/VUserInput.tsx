import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import { CUserInputType } from '@/features/users/userInput/CUserInput.ts';
import DateSelector from '@/components/forms/htmls/DateSelector.tsx';

const VUserInput = ({ controller }: { controller: CUserInputType }) => {
  return (
    <InputContainer>
      <TextInput
        value={controller.firstName.value}
        label={'Imię'}
        error={controller.firstName.error}
        onChange={controller.firstName.onChange}
      />
      <TextInput
        value={controller.lastName.value}
        label={'Nazwisko'}
        error={controller.lastName.error}
        onChange={controller.lastName.onChange}
      />
      <TextInput
        value={controller.login.value}
        label={'Login'}
        error={controller.login.error}
        onChange={controller.login.onChange}
      />
      <TextInput
        value={controller.phone.value}
        label={'Telefon'}
        error={controller.phone.error}
        onChange={controller.phone.onChange}
      />
      <DateSelector
        label={'Data urodzenia'}
        value={controller.birthDate.date}
        onChange={controller.birthDate.handleDateChange}
        error={controller.birthDate.error}
      />
    </InputContainer>
  );
};

export default VUserInput;
