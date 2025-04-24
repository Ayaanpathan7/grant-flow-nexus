
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle } from 'lucide-react';
import ApplicationTable from '@/components/applications/ApplicationTable';
import { applications } from '@/data/mockData';

const Applications = () => {
  // Group applications by status
  const drafts = applications.filter(app => app.status === 'draft');
  const submitted = applications.filter(app => app.status === 'submitted' || app.status === 'under review');
  const completed = applications.filter(app => app.status === 'approved' || app.status === 'rejected');

  return (
    <div className="container py-6 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-grant-navy">My Applications</h1>
          <p className="text-gray-500 mt-1">
            Manage and track all your grant applications.
          </p>
        </div>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>New Application</span>
        </Button>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <Tabs defaultValue="submitted" className="w-full">
          <div className="border-b px-4">
            <TabsList className="bg-transparent -mb-px">
              <TabsTrigger value="submitted" className="data-[state=active]:border-b-2 data-[state=active]:border-grant-navy rounded-none">
                In Progress ({submitted.length})
              </TabsTrigger>
              <TabsTrigger value="drafts" className="data-[state=active]:border-b-2 data-[state=active]:border-grant-navy rounded-none">
                Drafts ({drafts.length})
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:border-b-2 data-[state=active]:border-grant-navy rounded-none">
                Completed ({completed.length})
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-grant-navy rounded-none">
                All Applications ({applications.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="submitted">
            <ApplicationTable applications={submitted} />
          </TabsContent>
          
          <TabsContent value="drafts">
            <ApplicationTable applications={drafts} />
          </TabsContent>
          
          <TabsContent value="completed">
            <ApplicationTable applications={completed} />
          </TabsContent>
          
          <TabsContent value="all">
            <ApplicationTable applications={applications} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-serif font-semibold mb-4">Application Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Grant Writing Tips</h3>
            <p className="text-sm text-gray-600 mb-3">Learn best practices for creating competitive grant applications.</p>
            <Button variant="outline" size="sm">View Guide</Button>
          </div>
          <div className="bg-white p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Application Templates</h3>
            <p className="text-sm text-gray-600 mb-3">Download templates for common grant application components.</p>
            <Button variant="outline" size="sm">Browse Templates</Button>
          </div>
          <div className="bg-white p-4 border rounded-lg">
            <h3 className="font-medium mb-2">FAQ & Support</h3>
            <p className="text-sm text-gray-600 mb-3">Get answers to common questions about the application process.</p>
            <Button variant="outline" size="sm">Visit Help Center</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
