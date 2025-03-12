export type StudentsResponse = StudentInterface[];

export type StudentInterface = {
  id: string;
  name: string;
  status: 'online' | 'offline';
};

export type StudentDetailsResponse = StudentDetails;

export type StudentDetails = {
  id: string;
  name: string;
  currentUrl: string | null;
  currentScreen: string | null;
  history: History[];
};

export type History = {
  timestamp: string;
  urls: string[];
};
