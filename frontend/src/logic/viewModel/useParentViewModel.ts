import { injectParentModel } from '@/configuration/context/modelContext.ts';
import RegisterDto from '@/domain/dtos/RegisterDto.ts';

const useParentViewModel = (id: number) => {
  const parentModel = injectParentModel()(id);

  const handleParentChange = (name: string, value: string) => {
    parentModel.setParent(oldValue => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const handleParentCreate = (studentId: number, registerData: RegisterDto) => {
    parentModel.createParent.createParent({
      studentId,
      parentData: registerData,
    });
  };

  const handleParentUpdate = (registerData: RegisterDto) => {
    parentModel.updateParent.updateParent({
      id: id,
      parentData: registerData,
    });
  };

  const handleParentDelete = (id: number) => {
    parentModel.deleteParent.deleteParent(id);
  };

  return {
    parents: parentModel.parents,
    parentsLoading: parentModel.getParents.state,

    parent: parentModel.parent,
    handleParentChange,
    parentLoading: parentModel.getParent.state,

    handleParentCreate,
    parentCreateLoading: parentModel.createParent.state,

    handleParentUpdate,
    parentUpdateLoading: parentModel.updateParent.state,

    handleParentDelete,
    parentDeleteLoading: parentModel.deleteParent.state,
  };
};

export default useParentViewModel;
