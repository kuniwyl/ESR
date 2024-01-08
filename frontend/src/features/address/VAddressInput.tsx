import FormTitle from '@/components/ui/FormTitle/FormTitle.tsx';
import InputContainer from '@/components/ui/InputContainer/InputContainer.tsx';
import TextInput from '@/components/forms/TextInput/TextInput.tsx';
import { CAddressType } from '@/features/address/CAddress.ts';

interface VAddressInputProps {
  name: string;
  controller: CAddressType;
}

const VAddressInput = (props: VAddressInputProps) => {
  const { name, controller } = props;
  return (
    <>
      <FormTitle>{name}</FormTitle>
      <InputContainer>
        <TextInput
          className="flex-grow-1 p-1"
          value={controller.street.value}
          label={'Nazwa ulicy'}
          error={controller.street.error}
          onChange={controller.street.onChange}
        />
        <TextInput
          className="flex-grow-1 p-1"
          value={controller.city.value}
          label={'Miasto'}
          error={controller.city.error}
          onChange={controller.city.onChange}
        />
        <TextInput
          className="flex-grow-1 p-1"
          value={controller.house.value}
          label={'Numer domu'}
          error={controller.house.error}
          onChange={controller.house.onChange}
        />
        <TextInput
          className="flex-grow-1 p-1"
          value={controller.apartment.value}
          label={'Number mieszkania*'}
          error={controller.apartment.error}
          onChange={controller.apartment.onChange}
        />
        <TextInput
          className="p-1 flex-grow-1"
          value={controller.zipCode.value}
          label={'Kod pocztowy'}
          error={controller.zipCode.error}
          onChange={controller.zipCode.onChange}
        />
      </InputContainer>
    </>
  );
};

export default VAddressInput;
