
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  footer?: {
    linkText: string;
    linkHref: string;
  };
}

const DashboardCard = ({
  title,
  description,
  children,
  className,
  footer,
}: DashboardCardProps) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">{children}</CardContent>
      {footer && (
        <CardFooter className="pt-2 border-t">
          <Button variant="link" asChild className="px-0">
            <Link to={footer.linkHref}>{footer.linkText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default DashboardCard;
