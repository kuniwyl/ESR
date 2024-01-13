import CStudNotification from '@/features/student/notification/CStudNotification.ts';
import { HeaderText } from '@/components/ui';
import Container from 'react-bootstrap/Container';

import './style.scss';

const VStudNotification = () => {
  const controller = CStudNotification();

  if (controller.notices.isLoading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <>
      <HeaderText text={'Powiadomienia'} />
      <Container>
        {controller.notices.data?.data.map(notice => {
          const slot = controller.table.find(slot => slot.idx == notice.slot);
          console.log(slot);

          return (
            <div key={notice.id} className="notice">
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
              <div className="d-flex justify-content-between">
                <p>
                  <b>Data:</b> {notice.date}
                </p>
                <p>
                  <b>Godzina:</b> {slot.start} - {slot.end}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default VStudNotification;
