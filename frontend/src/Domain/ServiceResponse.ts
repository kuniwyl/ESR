interface ServiceResponse<T> {
  success: boolean;
  message: string;
  exception: string;
  dataTypeName: string;
  data: T;
}

export default ServiceResponse;
