import config from 'config';
import { getRequestOptions, handleResponse } from 'helpers/RequestHelper';
import { StudentDetailsResponse, StudentsResponse } from 'interfaces/Students';

export const StudentsService = {
  getStudents,
  getStudentDetails,
};

async function getStudents(): Promise<StudentsResponse> {
  const requestOptions = getRequestOptions();

  return await fetch(`${config.api}/students`, requestOptions).then(handleResponse);
}

async function getStudentDetails(id: string): Promise<StudentDetailsResponse> {
  const requestOptions = getRequestOptions();

  return await fetch(`${config.api}/students/${id}`, requestOptions).then(handleResponse);
}
