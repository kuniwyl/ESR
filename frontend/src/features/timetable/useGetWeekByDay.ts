const useGetWeekByDay = (date: Date) => {
  const copyOfDate = new Date(date);
  const first = copyOfDate.getDate() - copyOfDate.getDay() + 1;
  const last = first + 4;

  const firstDay = new Date(copyOfDate.setDate(first));
  const lastDay = new Date(copyOfDate.setDate(last));

  return [firstDay, lastDay];
};

export type returnUseGetWeekByDay = ReturnType<typeof useGetWeekByDay>;
export default useGetWeekByDay;
