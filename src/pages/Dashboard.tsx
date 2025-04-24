
import React from "react";
import { 
  BarChart3, 
  Calendar, 
  DollarSign, 
  FileText, 
  Layers, 
  Search,
  CheckSquare
} from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import DashboardCard from "@/components/dashboard/DashboardCard";
import GrantCard from "@/components/grants/GrantCard";
import ApplicationTable from "@/components/applications/ApplicationTable";
import { Button } from "@/components/ui/button";
import { applications, grants, stats } from "@/data/mockData";
import { formatCurrency } from "@/lib/utils";

const Dashboard = () => {
  // Get just the active grant applications
  const activeApplications = applications.filter(
    (app) => app.status === "submitted" || app.status === "under review"
  );

  // Get open grants for the recent grants section
  const openGrants = grants.filter((grant) => grant.status === "open");

  return (
    <div className="container py-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-grant-navy">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's an overview of your research grants and applications.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Active Grants"
          value={stats.openGrants}
          icon={<Search className="text-blue-500" />}
          description="Currently open grant opportunities"
        />
        <StatsCard
          title="My Applications"
          value={stats.totalApplications}
          icon={<FileText className="text-indigo-500" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Pending Reviews"
          value={stats.pendingReviews}
          icon={<CheckSquare className="text-amber-500" />}
        />
        <StatsCard
          title="Approved Funding"
          value={formatCurrency(stats.approvedFunds)}
          icon={<DollarSign className="text-green-500" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Active Applications */}
        <div className="lg:col-span-2">
          <DashboardCard
            title="Active Applications"
            description="Your grant applications currently under review"
            footer={{ linkText: "View all applications", linkHref: "/applications" }}
          >
            <ApplicationTable applications={activeApplications} />
          </DashboardCard>
        </div>

        {/* Recent Grants */}
        <div className="space-y-6">
          <DashboardCard
            title="Open Grant Opportunities"
            description="Recently added grants matching your interests"
            footer={{ linkText: "Browse all grants", linkHref: "/grants" }}
          >
            <div className="space-y-4">
              {openGrants.slice(0, 2).map((grant) => (
                <div key={grant.id} className="p-3 rounded-lg border bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-grant-navy">{grant.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                    {grant.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-grant-blue">
                      {formatCurrency(grant.amount)}
                    </span>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                Find More Opportunities
              </Button>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Upcoming Deadlines"
            description="Don't miss these important dates"
          >
            <div className="space-y-3">
              {grants
                .filter((g) => g.status === "open")
                .slice(0, 3)
                .map((grant) => (
                  <div
                    key={grant.id}
                    className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50"
                  >
                    <div className="bg-grant-lightblue rounded-md p-2 text-grant-navy">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{grant.title}</p>
                      <p className="text-xs text-gray-500">Due {new Date(grant.deadline).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
