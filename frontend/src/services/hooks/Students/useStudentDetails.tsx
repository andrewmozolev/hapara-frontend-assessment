import { useQuery } from '@tanstack/react-query';
import { StudentsService } from 'services/Students.Service';

export const useStudentDetails = (id: string, isOnline: boolean) => {
  return useQuery({
    queryKey: ['students', id],
    queryFn: () => StudentsService.getStudentDetails(id),
    enabled: !!id && isOnline,
  });
};
