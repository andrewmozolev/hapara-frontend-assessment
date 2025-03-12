import clsx from 'clsx';
import StudentDetailsModal from 'components/modals/StudentDetailsModal';
import { useModal } from 'helpers/hooks/useModal';
import { StudentInterface } from 'interfaces/Students';
import { useStudentDetails } from 'services/hooks/Students/useStudentDetails';

type StudentTileProps = {
  student: StudentInterface;
};

export default function StudentTile({ student }: StudentTileProps) {
  const { openModal } = useModal();

  const isOnline = student.status === 'online';

  const { data: details, isLoading } = useStudentDetails(student.id, isOnline);

  const handleStudentClick = () => {
    if (isLoading || !isOnline) {
      return;
    }

    openModal(<StudentDetailsModal details={details} />);
  };

  if (isLoading) {
    return (
      <li className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow transition-colors">
        <div className="flex items-center gap-1 text-lg">
          {student.name}
          {isOnline && <div className={'inline-block size-2 rounded-full bg-green-500 text-sm'}></div>}
        </div>
        <div className="flex min-h-32 items-center justify-center rounded-lg border border-gray-200">
          <span className="text-gray-500">Loading...</span>
        </div>
      </li>
    );
  }

  return (
    <li
      className={clsx(
        isOnline && 'cursor-pointer bg-purple-50 outline-purple-300 hover:border-purple-300 hover:outline-1',
        'flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow transition-colors'
      )}
      key={student.id}
      onClick={handleStudentClick}
    >
      <div className="flex items-center gap-1 text-lg">
        {student.name}
        {isOnline && <div className={'inline-block size-2 rounded-full bg-green-500 text-sm'}></div>}
      </div>
      <div
        className={clsx(
          isOnline && 'bg-gray-100',
          'mt-2 flex min-h-32 grow items-center justify-center rounded-lg border border-gray-200'
        )}
      >
        {isOnline ? (
          <span className="text-center text-gray-500">
            {details && details.currentScreen ? (
              <img src={details.currentScreen} alt="Current Screen" />
            ) : (
              <span>Current screen is unavailable</span>
            )}
          </span>
        ) : (
          <span className="text-gray-500">Offline</span>
        )}
      </div>
    </li>
  );
}
