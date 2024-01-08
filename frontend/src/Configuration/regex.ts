const regex = {
  POLISH_LETTERS_NUMBERS: /^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
  POLISH_LETTERS: /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
  POLISH_LETTERS_SPACES: /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/,
  POLISH_LETTERS_SPACES_NUMBERS: /^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\- ]+$/,
  NUMBERS: /^[0-9]+$/,
  NUMBERS_NULLABLE: /^\d*$/,
  EMAIL: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
  WEBSITE:
    /^((http|https):\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  ZIP_CODE: /^[0-9]{2}-[0-9]{3}$/,
  SEMESTER: /^[0-9]{4}\/[0-9]{4}[ZL]$/,
  CLASS_NAME_ID: /^[A-Z]{1}[1-9]{1}$/,
};

export default regex;
