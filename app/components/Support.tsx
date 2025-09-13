'use client';

import { Heart, Users, Calendar, Gift, TrendingUp, Building } from 'lucide-react';
import { useState } from 'react';

const Support = () => {
  const [donationAmount, setDonationAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');

  const donationOptions = ['10', '25', '50', '100', '250'];

  const supportWays = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Your donation helps us fulfill dreams and support families.",
      action: "Donate Now",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of amazing volunteers making a difference.",
      action: "Join Us",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Calendar,
      title: "Fundraise",
      description: "Organize or participate in fundraising events.",
      action: "Start Fundraising",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Gift,
      title: "Leave a Legacy",
      description: "Include Taylor Made Dreams in your will.",
      action: "Learn More",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Regular Giving",
      description: "Set up a monthly donation to provide ongoing support.",
      action: "Set Up",
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      icon: Building,
      title: "Corporate Partnership",
      description: "Partner with us to make a lasting impact.",
      action: "Partner With Us",
      color: "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
  ];

  const impactExamples = [
    { amount: '10', impact: 'Provides a memory-making kit for a family' },
    { amount: '25', impact: 'Funds a special day out for a child' },
    { amount: '50', impact: 'Covers a family support session' },
    { amount: '100', impact: 'Helps fulfill a child\'s wish' },
    { amount: '250', impact: 'Supports a family for a month' },
  ];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    console.log(`Processing donation of £${amount}`);
    alert(`Thank you for your donation of £${amount}! In a real implementation, this would redirect to a payment processor.`);
  };

  return (
    <section id="donate" className="py-20 bg-[var(--muted)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#772477' }}>Support Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways you can help us bring dreams to life. Every contribution, big or small, makes a real difference.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Make a Donation</h3>

          <form onSubmit={handleDonation} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select or enter an amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {donationOptions.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setDonationAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                      donationAmount === amount && !customAmount
                        ? 'border-purple-700 bg-purple-700 text-white'
                        : 'border-gray-300 hover:border-purple-700'
                    }`}
                    style={donationAmount === amount && !customAmount ? { backgroundColor: '#772477', borderColor: '#772477' } : {}}
                  >
                    £{amount}
                  </button>
                ))}
                <input
                  type="number"
                  placeholder="Other"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount('');
                  }}
                  className="py-3 px-4 rounded-lg border-2 border-gray-300 focus:border-purple-700 focus:outline-none"
                  min="1"
                />
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Your Impact:</strong>{' '}
                {impactExamples.find(ex => ex.amount === (customAmount || donationAmount))?.impact ||
                  `Your generous donation of £${customAmount || donationAmount} will help us continue our mission.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <Heart size={20} className="mr-2" />
                Donate £{customAmount || donationAmount} Once
              </button>
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => alert('Monthly donation setup would be implemented here')}
              >
                <Heart size={20} className="mr-2" />
                Donate £{customAmount || donationAmount} Monthly
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              All donations are processed securely. Taylor Made Dreams is a registered charity (Charity No. 1234567).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportWays.map((way, index) => (
            <div
              key={index}
              className={`${way.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <way.icon size={40} className={`${way.iconColor} mb-4`} />
              <h4 className="text-xl font-bold mb-2">{way.title}</h4>
              <p className="text-gray-700 mb-4">{way.description}</p>
              <button className="font-semibold hover:underline" style={{ color: '#772477' }}>
                {way.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;