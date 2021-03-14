enum UserTypes {
  Admin = 'Admin',
  Mentor = 'Mentor',
  Mentee = 'Mentee',
}

export interface Mentor {
  jobTitle: string;
  techArea: string[];
  languages: string[];
  numMentees: number;
  company?: string;
  linkedin?: string;
  mentees?: Mentee[];
  bio?: string;
}

export interface Mentee {
  jobTitle: string;
  languages: string[];
  techArea: string[];
  company?: string;
  linkedin?: string;
  mentor?: Mentor;
  bio?: string;
}

export interface UserBasic {
  firstName: string;
  lastName: string;
  email: string;
}

export interface User extends UserBasic {
  userTypes: UserTypes[];
  mentor?: Mentor;
  mentee?: Mentee;
}
