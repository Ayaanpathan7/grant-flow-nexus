
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { FileText, MoreVertical } from 'lucide-react';
import { Application } from '@/types';
import { formatDate, formatCurrency } from '@/lib/utils';

interface ApplicationTableProps {
  applications: Application[];
  isLoading?: boolean;
}

const ApplicationTable = ({ applications, isLoading = false }: ApplicationTableProps) => {
  const statusStyles = {
    draft: 'bg-gray-100 text-gray-800 border-gray-200',
    submitted: 'bg-blue-100 text-blue-800 border-blue-200',
    'under review': 'bg-amber-100 text-amber-800 border-amber-200',
    approved: 'bg-green-100 text-green-800 border-green-200',
    rejected: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[250px]">Project Title</TableHead>
            <TableHead>Grant</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                Loading applications...
              </TableCell>
            </TableRow>
          ) : applications.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8">
                <div className="flex flex-col items-center gap-2">
                  <FileText className="h-8 w-8 text-gray-400" />
                  <h3 className="font-medium text-gray-900">No applications yet</h3>
                  <p className="text-sm text-gray-500">
                    Get started by creating a new grant application
                  </p>
                  <Button className="mt-2">Start New Application</Button>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            applications.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium">{application.projectTitle}</TableCell>
                <TableCell>{application.grantTitle}</TableCell>
                <TableCell>{formatDate(application.submittedDate)}</TableCell>
                <TableCell>{formatCurrency(application.requestedAmount)}</TableCell>
                <TableCell>
                  <Badge className={statusStyles[application.status]}>
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>View documents</DropdownMenuItem>
                      {application.status === 'draft' && (
                        <DropdownMenuItem>Edit application</DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      {application.status === 'draft' && (
                        <DropdownMenuItem>Submit application</DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicationTable;
