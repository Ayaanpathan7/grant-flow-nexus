
import { Application, Grant, Stats, User } from '../types';

export const currentUser: User = {
  id: 'user1',
  name: 'Dr. Jane Smith',
  email: 'jane.smith@university.edu',
  role: 'researcher',
  department: 'Computer Science',
  institution: 'University of Technology',
  avatar: 'https://i.pravatar.cc/150?img=44',
};

export const adminUser: User = {
  id: 'admin1',
  name: 'Prof. Robert Johnson',
  email: 'robert.johnson@university.edu',
  role: 'admin',
  department: 'Research & Development',
  avatar: 'https://i.pravatar.cc/150?img=68',
};

export const grants: Grant[] = [
  {
    id: 'grant1',
    title: 'Advanced AI Research Initiative',
    description: 'Supporting cutting-edge research in artificial intelligence and machine learning applications.',
    agency: 'National Science Foundation',
    amount: 250000,
    deadline: '2025-12-31',
    eligibility: ['PhD', 'Professor', 'PostDoc'],
    status: 'open',
    category: ['Computer Science', 'AI', 'Technology'],
    createdAt: '2025-01-15',
  },
  {
    id: 'grant2',
    title: 'Climate Change Adaptation Studies',
    description: 'Research on innovative approaches to mitigate the effects of climate change on urban environments.',
    agency: 'Environmental Protection Agency',
    amount: 180000,
    deadline: '2025-09-15',
    eligibility: ['Professor', 'Research Group'],
    status: 'open',
    category: ['Environmental Science', 'Climate', 'Urban Planning'],
    createdAt: '2025-02-10',
  },
  {
    id: 'grant3',
    title: 'Quantum Computing Breakthrough Program',
    description: 'Supporting theoretical and applied research in quantum computing algorithms and hardware.',
    agency: 'Department of Energy',
    amount: 500000,
    deadline: '2025-06-30',
    eligibility: ['Professor', 'Research Group', 'Institution'],
    status: 'upcoming',
    category: ['Physics', 'Computer Science', 'Quantum Computing'],
    createdAt: '2025-03-01',
  },
  {
    id: 'grant4',
    title: 'Medical Innovations Research',
    description: 'Supporting research in novel medical treatments and healthcare delivery systems.',
    agency: 'National Institutes of Health',
    amount: 350000,
    deadline: '2024-12-15',
    eligibility: ['Professor', 'Medical Researcher', 'PostDoc'],
    status: 'closed',
    category: ['Medicine', 'Healthcare', 'Biology'],
    createdAt: '2024-06-01',
  },
];

export const applications: Application[] = [
  {
    id: 'app1',
    grantId: 'grant1',
    grantTitle: 'Advanced AI Research Initiative',
    userId: 'user1',
    applicantName: 'Dr. Jane Smith',
    submittedDate: '2025-03-15',
    status: 'submitted',
    projectTitle: 'Neural Networks for Climate Prediction',
    requestedAmount: 220000,
    duration: '2 years',
    documents: [
      {
        id: 'doc1',
        name: 'Research Proposal',
        url: '#',
        uploadedAt: '2025-03-15',
      },
      {
        id: 'doc2',
        name: 'Budget Plan',
        url: '#',
        uploadedAt: '2025-03-14',
      },
    ],
  },
  {
    id: 'app2',
    grantId: 'grant2',
    grantTitle: 'Climate Change Adaptation Studies',
    userId: 'user1',
    applicantName: 'Dr. Jane Smith',
    submittedDate: '2025-04-02',
    status: 'under review',
    projectTitle: 'Urban Heat Island Mitigation Strategies',
    requestedAmount: 175000,
    duration: '18 months',
    documents: [
      {
        id: 'doc3',
        name: 'Research Proposal',
        url: '#',
        uploadedAt: '2025-04-01',
      },
      {
        id: 'doc4',
        name: 'Team Qualifications',
        url: '#',
        uploadedAt: '2025-04-01',
      },
    ],
    reviews: [
      {
        id: 'rev1',
        reviewerId: 'admin1',
        reviewerName: 'Prof. Robert Johnson',
        comment: 'Strong proposal with clear methodologies. Budget seems reasonable.',
        score: 85,
        createdAt: '2025-04-10',
      },
    ],
  },
  {
    id: 'app3',
    grantId: 'grant4',
    grantTitle: 'Medical Innovations Research',
    userId: 'user1',
    applicantName: 'Dr. Jane Smith',
    submittedDate: '2024-08-22',
    status: 'approved',
    projectTitle: 'AI-Assisted Diagnostic Systems',
    requestedAmount: 320000,
    duration: '3 years',
    documents: [
      {
        id: 'doc5',
        name: 'Full Proposal',
        url: '#',
        uploadedAt: '2024-08-20',
      },
    ],
    reviews: [
      {
        id: 'rev2',
        reviewerId: 'admin1',
        reviewerName: 'Prof. Robert Johnson',
        comment: 'Excellent proposal with innovative approaches. High potential for impact.',
        score: 95,
        createdAt: '2024-09-05',
      },
    ],
  },
];

export const stats: Stats = {
  totalGrants: grants.length,
  openGrants: grants.filter(grant => grant.status === 'open').length,
  totalApplications: applications.length,
  pendingReviews: applications.filter(app => app.status === 'submitted').length,
  approvedFunds: applications
    .filter(app => app.status === 'approved')
    .reduce((sum, app) => sum + app.requestedAmount, 0),
};
