
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, Clock } from 'lucide-react';
import { Grant } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';

interface GrantCardProps {
  grant: Grant;
}

const GrantCard = ({ grant }: GrantCardProps) => {
  const statusColors = {
    open: 'bg-green-100 text-green-800 border-green-200',
    closed: 'bg-red-100 text-red-800 border-red-200',
    upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const daysUntilDeadline = () => {
    const deadline = new Date(grant.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:border-grant-blue hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-lg font-serif">{grant.title}</CardTitle>
            <CardDescription className="text-sm">{grant.agency}</CardDescription>
          </div>
          <Badge className={statusColors[grant.status]}>{grant.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{grant.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-grant-navy opacity-70" />
            <span>{formatCurrency(grant.amount)}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-grant-navy opacity-70" />
            <span>Deadline: {formatDate(grant.deadline)}</span>
          </div>
          
          {grant.status === 'open' && (
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-grant-navy opacity-70" />
              <span>{daysUntilDeadline()} days remaining</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-1">
          {grant.category.map((cat) => (
            <Badge key={cat} variant="outline" className="bg-grant-lightblue text-grant-navy text-xs">
              {cat}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t mt-auto">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {grant.eligibility.join(', ')}
          </span>
          <Button size="sm">View Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GrantCard;
