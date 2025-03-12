import StudentTile from 'components/StudentTile/StudentTile';
import { useStudents } from 'services/hooks/Students/useStudents';

export default function Dashboard() {
  const { data: students, isLoading } = useStudents();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!students || students.length === 0) {
    return <div>No students</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3">
        {students.map((student) => (
          <StudentTile key={student.id} student={student} />
        ))}
      </ul>
    </div>
  );
}
