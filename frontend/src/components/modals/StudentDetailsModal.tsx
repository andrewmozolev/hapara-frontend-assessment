import BaseModal from 'components/Modal/BaseModal';
import { StudentDetails } from 'interfaces/Students';

type StudentDetailsModalProps = {
  details?: StudentDetails;
};

export default function StudentDetailsModal({ details }: StudentDetailsModalProps) {
  if (!details) {
    return (
      <BaseModal>
        <h2 className="text-md">No student details</h2>
      </BaseModal>
    );
  }

  return (
    <BaseModal>
      <h2 className="text-xl">Current tab</h2>
      <div className="mb-4">
        {details.currentUrl ? (
          <a className="text-blue-800" href={details.currentUrl} target="_blank">
            {details.currentUrl}
          </a>
        ) : (
          <span>No tab open</span>
        )}
      </div>
      <h2 className="text-xl">Activity Log</h2>
      {details.history.map((history) => (
        <div className="mb-3" key={history.timestamp}>
          <h2>{new Date(Number(history.timestamp)).toLocaleTimeString()}</h2>
          <ul>
            {history.urls.map((url) => (
              <li className="mb-2" key={url}>
                <a className="text-blue-800" href={url} target="_blank">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </BaseModal>
  );
}
