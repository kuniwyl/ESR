import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import regex from '@/configuration/regex.ts';
import AddressDto from '@/domain/dtos/AddressDto.ts';

const CAddress = (id: number, address: AddressDto | null) => {
  const street = useTextInput({
    initialValue: id !== 0 ? (address && address.street) || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
  });

  const house = useTextInput({
    initialValue: id !== 0 ? (address && address.house) || '' : '',
    required: true,
    maxLength: 40,
    minLength: 1,
    pattern: regex.NUMBERS,
  });

  const apartment = useTextInput({
    initialValue: id !== 0 ? (address && address.apartment) || '' : '',
    required: false,
    pattern: regex.NUMBERS,
  });

  const city = useTextInput({
    initialValue: id !== 0 ? (address && address.city) || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_SPACES,
  });

  const zipCode = useTextInput({
    initialValue: id !== 0 ? (address && address.zipCode) || '' : '',
    maxLength: 6,
    minLength: 6,
    required: true,
    pattern: regex.ZIP_CODE,
  });

  const isValid = () => {
    return (
      street.isValid() &&
      house.isValid() &&
      apartment.isValid() &&
      city.isValid() &&
      zipCode.isValid()
    );
  };

  return {
    street,
    house,
    apartment,
    city,
    zipCode,
    isValid,
  };
};

export type CAddressType = ReturnType<typeof CAddress>;
export default CAddress;
