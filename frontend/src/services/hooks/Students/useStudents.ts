import { useQuery } from '@tanstack/react-query';
import { StudentsService } from 'services/Students.Service';

export const useStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: () => StudentsService.getStudents(),
  });
};
