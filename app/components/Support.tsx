'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Heart, Users, Calendar, Gift, TrendingUp, Building, ArrowRight } from 'lucide-react';

const donationOptions = ['10', '25', '50', '100', '250'];

const supportWays = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Your donation helps us fulfil dreams and support families.',
    action: 'Donate Now',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    href: '#donate-form',
    anchorId: 'donate',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of amazing volunteers making a difference.',
    action: 'Join Us',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    href: '#volunteer',
    anchorId: 'volunteer',
  },
  {
    icon: Calendar,
    title: 'Fundraise',
    description: 'Organise or take part in fundraising events in your community.',
    action: 'Start Fundraising',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    href: '#news',
    anchorId: 'fundraise',
  },
  {
    icon: Gift,
    title: 'Leave a Legacy',
    description: 'Include Taylor Made Dreams in your will and create lasting impact.',
    action: 'Legacy Giving',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    href: '#legacy',
    anchorId: 'legacy',
  },
  {
    icon: TrendingUp,
    title: 'Regular Giving',
    description: 'Set up a monthly donation to provide ongoing support.',
    action: 'Monthly Giving',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    href: '#monthly',
    anchorId: 'monthly',
  },
  {
    icon: Building,
    title: 'Corporate Partnership',
    description: 'Partner with us to empower more families across the South East.',
    action: 'Partner With Us',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    href: '#corporate',
    anchorId: 'corporate',
  },
];

const impactExamples = [
  { amount: '10', impact: 'Provides a memory-making kit for a family.' },
  { amount: '25', impact: 'Funds a special day out for a child.' },
  { amount: '50', impact: 'Covers a family support session.' },
  { amount: '100', impact: "Helps fulfil a child's bucket-list wish." },
  { amount: '250', impact: 'Supports a family with a month of holistic care.' },
];

const Support = () => {
  const [donationAmount, setDonationAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');

  const selectedAmount = customAmount || donationAmount;

  const handleDonation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Processing donation of £${selectedAmount}`);
    alert(`Thank you for your donation of £${selectedAmount}! This demo would normally redirect to a secure payment processor.`);
  };

  const currentImpact =
    impactExamples.find((example) => example.amount === selectedAmount) ??
    (selectedAmount
      ? { amount: selectedAmount, impact: `Your generous donation of £${selectedAmount} keeps our programmes running.` }
      : null);

  return (
    <section id="donate" className="py-20 bg-[var(--muted)] scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="mb-4" style={{ color: '#772477' }}>Support Our Mission</h2>
          <p className="text-xl text-gray-600">
            There are so many ways to help us bring dreams to life. Every contribution, big or small, creates tangible impact for the children and families we support.
          </p>
        </div>

        <div id="donate-form" className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Make a Donation</h3>

          <form onSubmit={handleDonation} className="space-y-6">
            <fieldset>
              <legend className="block text-sm font-semibold text-gray-700 mb-3">Select or enter an amount</legend>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4" role="radiogroup" aria-label="Donation amount">
                {donationOptions.map((amount) => {
                  const isSelected = donationAmount === amount && !customAmount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                        isSelected ? 'border-purple-700 bg-purple-700 text-white' : 'border-gray-300 hover:border-purple-700'
                      }`}
                      style={isSelected ? { backgroundColor: '#772477', borderColor: '#772477' } : {}}
                      aria-pressed={isSelected}
                    >
                      £{amount}
                    </button>
                  );
                })}
                <label htmlFor="custom-amount" className="sr-only">
                  Enter custom donation amount
                </label>
                <input
                  id="custom-amount"
                  type="number"
                  placeholder="Other"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setDonationAmount('');
                  }}
                  className="py-3 px-4 rounded-lg border-2 border-gray-300 focus:border-purple-700 focus:outline-none"
                  min="1"
                  aria-label="Custom donation amount"
                />
              </div>
            </fieldset>

            <div className="bg-gray-100 p-4 rounded-lg" role="status" aria-live="polite">
              <p className="text-sm text-gray-600">
                <strong>Your impact:</strong>{' '}
                {currentImpact ? currentImpact.impact : 'Select an amount to see the immediate difference you can make.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button type="submit" className="btn btn-primary w-full">
                <Heart size={20} className="mr-2" aria-hidden="true" />
                Donate £{selectedAmount || '0'} Once
              </button>
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => alert('Monthly donation setup would be implemented here.')}
              >
                <Heart size={20} className="mr-2" aria-hidden="true" />
                Donate £{selectedAmount || '0'} Monthly
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            All donations are processed securely. Taylor Made Dreams is a registered charity in England & Wales (Charity No. 1158178).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="volunteer">
          {supportWays.map((way, index) => (
            <article
              key={way.title}
              id={way.anchorId}
              className={`${way.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <way.icon size={40} className={`${way.iconColor} mb-4`} aria-hidden="true" />
              <h4 className="text-xl font-bold mb-2">{way.title}</h4>
              <p className="text-gray-700 mb-4">{way.description}</p>
              <Link href={way.href} className="font-semibold inline-flex items-center gap-2 text-[var(--primary)] hover:underline">
                {way.action}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
