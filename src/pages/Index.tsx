
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  SearchIcon, 
  FileText, 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-grant-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Simplify Your Research Grant Management
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              A comprehensive platform to discover, apply, and manage research grants efficiently.
              Streamline your workflow from application to reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-grant-gold text-grant-navy hover:bg-amber-400">
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-grant-navy mb-4">Powerful Features for Researchers and Administrators</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides tools to streamline the entire grant lifecycle, from discovery to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <SearchIcon className="h-8 w-8 text-grant-blue" />,
                title: "Grant Discovery",
                description: "Find relevant funding opportunities tailored to your research interests and qualifications."
              },
              {
                icon: <FileText className="h-8 w-8 text-grant-blue" />,
                title: "Application Management",
                description: "Create, edit, and submit grant applications with intuitive forms and document management."
              },
              {
                icon: <Award className="h-8 w-8 text-grant-blue" />,
                title: "Review Process",
                description: "Streamlined review workflows with customizable evaluation criteria and reviewer assignments."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-grant-blue" />,
                title: "Financial Tracking",
                description: "Monitor grant funds, expenses, and generate financial reports with ease."
              },
              {
                icon: <Users className="h-8 w-8 text-grant-blue" />,
                title: "Team Collaboration",
                description: "Work together on applications with role-based permissions and real-time updates."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-grant-blue" />,
                title: "Compliance Management",
                description: "Ensure adherence to funding requirements with integrated compliance checklists."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-grant-navy">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-grant-lightblue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-grant-navy">Ready to streamline your grant process?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of researchers and administrators who are using our platform to simplify their grant management workflow.
          </p>
          <Button size="lg" className="bg-grant-navy hover:bg-grant-navy/90">
            <Link to="/dashboard">Start Managing Grants</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
