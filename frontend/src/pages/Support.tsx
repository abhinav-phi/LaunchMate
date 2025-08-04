import React from 'react';
import { Github, Star, ExternalLink } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Support: React.FC = () => {
  const teamMembers = [
    {
      name: 'Abhinav',
      github: 'abhinav-phi',
      githubUrl: 'https://github.com/abhinav-phi',
      bio: 'Full-stack developer passionate about startup ecosystems'
    },
    {
      name: 'Daksh Dagar',
      github: 'DakshDagar01',
      githubUrl: 'https://github.com/DakshDagar01',
      bio: 'Frontend specialist focused on user experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-2xl">
              <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Support Our Project</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Support our project by starring our GitHub repos!
          </p>
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                ⭐ Show Your Support
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                A simple star on GitHub helps us reach more entrepreneurs and improve LaunchMate for everyone!
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Github className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-gray-900 text-white border-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                    icon={Github}
                    iconPosition="left"
                  >
                    @{member.github}
                  </Button>
                </a>
                
                <a
                  href={`${member.githubUrl}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="sm"
                    className="w-full bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
                    icon={Star}
                    iconPosition="left"
                  >
                    Star Repositories
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <Card className="text-center bg-gray-900 dark:bg-gray-800 text-white border-gray-700">
          <div className="mb-6">
            <Github className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">LaunchMate Repository</h3>
            <p className="text-gray-300 mb-4">
              Check out our main project repository and contribute to the codebase
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/abhinav-phi/LaunchMate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100"
                icon={ExternalLink}
                iconPosition="right"
              >
                View Repository
              </Button>
            </a>
            <a
              href="https://github.com/abhinav-phi/LaunchMate/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                icon={Star}
                iconPosition="left"
              >
                Star Project
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Support;