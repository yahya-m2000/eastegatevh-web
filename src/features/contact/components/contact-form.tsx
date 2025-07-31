'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '../../../shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../shared/components/ui/card';
import { Input } from '../../../shared/components/ui/input';
import { Label } from '../../../shared/components/ui/label';
import { Textarea } from '../../../shared/components/ui/textarea';
import { Select } from '../../../shared/components/ui/select';
import { ContactForm as ContactFormType } from '../../../core/types';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<ContactFormType>>({
    inquiryType: 'general',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations('contact');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ inquiryType: 'general', newsletter: false });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card className={className}>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground text-center">
            {t('form.success')}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">{t('title')}</CardTitle>
        <CardDescription>
          {t('subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('form.name')} *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name || ''}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email || ''}
                onChange={handleInputChange}
                required
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{t('form.company')}</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company || ''}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                name="role"
                type="text"
                value={formData.role || ''}
                onChange={handleInputChange}
                placeholder="CEO, Founder, etc."
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <Label htmlFor="inquiryType">Inquiry Type *</Label>
            <Select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType || ''}
              onChange={handleInputChange}
              required
            >
              <option value="investment">Investment Inquiry</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="media">Media & Press</option>
              <option value="careers">Career Opportunities</option>
              <option value="general">General Inquiry</option>
            </Select>
          </div>

          {/* Investment-specific fields */}
          {formData.inquiryType === 'investment' && (
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium">Investment Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fundingStage">Funding Stage</Label>
                  <Select
                    id="fundingStage"
                    name="fundingStage"
                    value={formData.fundingStage || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">Select stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B</option>
                    <option value="growth">Growth</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fundingAmount">Funding Amount</Label>
                  <Input
                    id="fundingAmount"
                    name="fundingAmount"
                    type="text"
                    value={formData.fundingAmount || ''}
                    onChange={handleInputChange}
                    placeholder="$1M - $10M"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    name="industry"
                    type="text"
                    value={formData.industry || ''}
                    onChange={handleInputChange}
                    placeholder="Fintech, Healthcare, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location || ''}
                    onChange={handleInputChange}
                    placeholder="Dubai, Singapore, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t('form.message')} *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message || ''}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="Tell us about your company, funding needs, or inquiry..."
            />
          </div>

          {/* Newsletter */}
          <div className="flex items-center space-x-2">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              checked={formData.newsletter || false}
              onChange={handleInputChange}
              className="rounded border-gray-300"
            />
            <Label htmlFor="newsletter" className="text-sm font-normal">
              Subscribe to our newsletter for market insights and portfolio updates
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t('form.submit')}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}