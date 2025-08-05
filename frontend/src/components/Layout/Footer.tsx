import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, User } from 'lucide-react';
import axios from 'axios'; 
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../UI/Button';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { firstName, email } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, formData);
      
      const successEvent = new CustomEvent('show-toast', {
        detail: { message: response.data.msg || 'Thanks for subscribing! 🎉', type: 'success' }
      });
      window.dispatchEvent(successEvent);

      setFormData({ firstName: '', email: '' }); 
    } catch (err: any) {
      const errorMsg = err.response?.data?.msg || 'Subscription failed. Please try again.';
      const errorEvent = new CustomEvent('show-toast', {
        detail: { message: errorMsg, type: 'error' }
      });
      window.dispatchEvent(errorEvent);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-500 p-2 rounded-xl">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">LaunchMate</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Simplifying startup compliance in Delhi. Your one-stop solution for licenses, approvals, and government schemes.
            </p>
            <p className="text-xs text-gray-500">
              {t('footer.made_by')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.home')}
              </Link>
              <Link to="/wizard" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('nav.wizard')}
              </Link>
              <Link to="/schemes" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('nav.schemes')}
              </Link>
              <Link to="/chat" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('nav.chat')}
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">{t('footer.legal') || 'Legal'}</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.terms')}
              </a>
              <Link to="/contact" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.contact')}
              </Link>
              <Link to="/support" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.support')}
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.newsletter.subtitle')}
            </p>
            {/* 4. Update the form with new fields and handlers */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                  placeholder="Your First Name"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <Button type="submit" size="sm" className="w-full" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : t('footer.newsletter.subscribe')}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/abhinav-phi/LaunchMate" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/abhinavphi" className="text-gray-400 hover:text-white text-sm transition-colors">
                LinkedIn
              </a>
              <a href="https://x.com/abhinav_phi" className="text-gray-400 hover:text-white text-sm transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;