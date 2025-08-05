import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import Card from '../components/UI/Card';

const Contact: React.FC = () => {
  const teamMembers = [
    {
      name: 'Abhinav',
      instagram: '@abhinav.phi',
      discord: 'abhinav.phi',
      instagramUrl: 'https://instagram.com/abhinav.phi',
      discordUrl: 'https://discord.com/users/abhinav.phi'
    },
    {
      name: 'Daksh Dagar',
      instagram: '@dakshdagar884',
      discord: 'dakshdagar',
      instagramUrl: 'https://instagram.com/dakshdagar884',
      discordUrl: 'https://discord.com/users/dakshdagar'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our team members
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
              </div>

              <div className="space-y-4">
                <a
                  href={member.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="font-medium">{member.instagram}</span>
                </a>

                <a
                  href={member.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">{member.discord}</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 text-center bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            Need Quick Help?
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">
            For immediate assistance, reach out to us on Discord or Instagram. We typically respond within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-yellow-600 dark:text-yellow-400">
            <span>• Business inquiries: Instagram DM</span>
            <span>• Technical support: Discord</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;