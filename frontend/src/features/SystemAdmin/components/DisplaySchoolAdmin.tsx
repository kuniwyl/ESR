// import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
// import { SpinnerComponent } from '@/components/ui';
// import { UserResponse } from '@/Domain/Model/AuthInterfaces.ts';
// import { useDeleteSchoolAdminMutation } from '@/store/api/systemAdminSlice.ts';
// import EditSchoolAdmin from '@/features/SystemAdmin/components/EditSchoolAdmin.tsx';
// import { useState } from 'react';
//
// interface DisplaySchoolAdminProps {
//   schoolId: number;
//   schoolAdmin: UserResponse;
// }

const DisplaySchoolAdmin = () => {
  //   {
  //   schoolId,
  //   schoolAdmin,
  // }: DisplaySchoolAdminProps) => {
  //   const [deleteSchoolAdmin, { isLoading: isDeleting }] =
  //     useDeleteSchoolAdminMutation();
  //   const [showToast, setShowToast] = useState<boolean>(false);
  //   const handleDelete = async (id: string) => {
  //     const confirm = window.confirm('Czy na pewno chcesz usunąć admina?');
  //     if (!confirm) {
  //       return;
  //     }
  //     await deleteSchoolAdmin({
  //       id: schoolId,
  //       schoolAdminId: Number.parseInt(id),
  //     });
  //   };

  return (
    <>
      {/*<tr key={schoolAdmin.id}>*/}
      {/*  <td>{schoolAdmin.id}</td>*/}
      {/*  <td>{schoolAdmin.login}</td>*/}
      {/*  <td>{schoolAdmin.firstName}</td>*/}
      {/*  <td>{schoolAdmin.lastName}</td>*/}
      {/*  <td onClick={() => setShowToast(!showToast)}>*/}
      {/*    <PencilSquare />*/}
      {/*  </td>*/}
      {/*  <td onClick={() => handleDelete(schoolAdmin.id)}>*/}
      {/*    {isDeleting ? <SpinnerComponent /> : <TrashFill />}*/}
      {/*  </td>*/}
      {/*</tr>*/}
      {/*<EditSchoolAdmin*/}
      {/*  schoolAdmin={schoolAdmin}*/}
      {/*  schoolId={schoolId}*/}
      {/*  showToast={showToast}*/}
      {/*  setShowToast={setShowToast}*/}
      {/*/>*/}
    </>
  );
};

export default DisplaySchoolAdmin;
