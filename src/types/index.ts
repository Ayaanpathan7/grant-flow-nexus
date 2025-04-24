
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'researcher';
  department: string;
  institution?: string;
  avatar?: string;
}

export interface Grant {
  id: string;
  title: string;
  description: string;
  agency: string;
  amount: number;
  deadline: string;
  eligibility: string[];
  status: 'open' | 'closed' | 'upcoming';
  category: string[];
  createdAt: string;
}

export interface Application {
  id: string;
  grantId: string;
  grantTitle: string;
  userId: string;
  applicantName: string;
  submittedDate: string;
  status: 'draft' | 'submitted' | 'under review' | 'approved' | 'rejected';
  projectTitle: string;
  requestedAmount: number;
  duration: string;
  documents: Document[];
  reviews?: Review[];
}

export interface Document {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
}

export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  comment: string;
  score: number;
  createdAt: string;
}

export interface Stats {
  totalGrants: number;
  openGrants: number;
  totalApplications: number;
  pendingReviews: number;
  approvedFunds: number;
}
