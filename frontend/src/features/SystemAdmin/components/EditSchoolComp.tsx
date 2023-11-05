import { Col, Row } from 'react-bootstrap';
import { ButtonF, InputGroupText } from '@/components/forms';
import Container from 'react-bootstrap/Container';
import { ChangeEvent, useEffect, useState } from 'react';
import { ModifySchoolData } from '@/model/SystemAdminInterfaces.ts';

interface EditSchoolCompProps {
  school: ModifySchoolData;
  setSchool: (e: ModifySchoolData) => void;
  isSaving: boolean;
  isSavingSuccess: boolean;
  handleSave: () => void;
}

const EditSchoolComp = ({
  school,
  setSchool,
  isSaving,
  isSavingSuccess,
  handleSave,
}: EditSchoolCompProps) => {
  const setSchoolData = (e: ChangeEvent<HTMLInputElement>) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSavingSuccess) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [isSavingSuccess]);

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'name'}
            name={'name'}
            label={'Nazwa szkoły'}
            placeholder={'Podaj nazwę szkoły'}
            value={school.name}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'address'}
            name={'address'}
            label={'Adres'}
            placeholder={'Podaj adres'}
            value={school.address}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'city'}
            name={'city'}
            label={'Miasto'}
            placeholder={'Podaj miasto'}
            value={school.city}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'state'}
            name={'state'}
            label={'Województwo'}
            placeholder={'Podaj województwo'}
            value={school.state}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'zipCode'}
            name={'zipCode'}
            label={'Kod pocztowy'}
            placeholder={'Podaj kod pocztowy'}
            value={school.zipCode}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'phoneNumber'}
            name={'phoneNumber'}
            label={'Numer telefonu'}
            placeholder={'Podaj numer telefonu'}
            value={school.phoneNumber}
            setValue={() => setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'email'}
            name={'email'}
            label={'Email'}
            placeholder={'Podaj email'}
            value={school.email}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'website'}
            name={'website'}
            label={'Strona internetowa'}
            placeholder={'Podaj stronę internetową'}
            value={school.website}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs sm={11} md={9}>
          <InputGroupText
            type={'text'}
            key={'logoUrl'}
            name={'logoUrl'}
            label={'Logo'}
            placeholder={'Podaj url do loga'}
            value={school.logoUrl}
            setValue={setSchoolData}
          />
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <ButtonF
            variant={'dark'}
            text={'Zapisz'}
            isLoading={isSaving}
            isSuccess={success}
            onClick={() => handleSave()}
            size={'sm'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EditSchoolComp;
