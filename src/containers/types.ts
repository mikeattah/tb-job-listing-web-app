export type Apply = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  cv: File | undefined;
};

export type Job = {
  jobTitle: string;
  companyName: string;
  location: string;
  jobCategory: string;
  salaryRange: string;
  description: string;
  benefits: string;
  jobType: string;
  workCondition: string;
  deadline: string;
};

export type Jobs = {
  id: string;
  title: string;
  company: string;
  company_logo: string | null;
  location: string;
  category: string;
  salary: string;
  description: string;
  benefits: string | null;
  type: string;
  work_condition: string;
  created_at: string;
  updated_at: string;
};

export type Res = {
  status: string;
  message: string;
  error?: string;
};

export type User = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  created_at: string;
  updated_at: string;
};
