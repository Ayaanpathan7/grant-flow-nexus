
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GrantCard from '@/components/grants/GrantCard';
import { Search, Filter } from 'lucide-react';
import { grants } from '@/data/mockData';
import { Grant } from '@/types';

const Grants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('deadline');

  // Filter grants based on search query and status
  const filteredGrants = grants.filter((grant) => {
    const matchesSearch = grant.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        grant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        grant.agency.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || grant.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort grants based on selected sort order
  const sortedGrants = [...filteredGrants].sort((a, b) => {
    switch (sortOrder) {
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'amount':
        return b.amount - a.amount;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  const getStatusCounts = () => {
    return {
      all: grants.length,
      open: grants.filter(g => g.status === 'open').length,
      upcoming: grants.filter(g => g.status === 'upcoming').length,
      closed: grants.filter(g => g.status === 'closed').length,
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="container py-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-grant-navy">Browse Grants</h1>
        <p className="text-gray-500 mt-1">
          Discover funding opportunities for your research projects.
        </p>
      </div>

      <div className="mb-6">
        <Tabs defaultValue="all" onValueChange={setStatusFilter}>
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">All Grants ({statusCounts.all})</TabsTrigger>
              <TabsTrigger value="open">Open ({statusCounts.open})</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming ({statusCounts.upcoming})</TabsTrigger>
              <TabsTrigger value="closed">Closed ({statusCounts.closed})</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by title, description, or agency..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
                  <SelectItem value="amount">Amount (Highest)</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {Object.keys(statusCounts).map((status) => (
            <TabsContent key={status} value={status} className="mt-0">
              {sortedGrants.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedGrants.map((grant) => (
                    <GrantCard key={grant.id} grant={grant} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No matching grants found</h3>
                  <p className="text-gray-500">Try adjusting your search filters</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Grants;
