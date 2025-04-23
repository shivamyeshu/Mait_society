'use client';
import React from 'react';
import { team } from '@/components/Detail/team';

const extractGitHubUsername = (url: string) => {
  const match = url.match(/github\.com\/([^/]+)/);
  return match ? match[1] : '';
};

export default function TeamPage() {
  const top3 = team.slice(0, 3);
  const rest = team.slice(3);

  return (
    <main className="bg-muted/10 text-gray-900 dark:text-white px-4 py-10 ">
      <section className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>

        {/* Top 3 - Big Box Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {top3.map((member) => {
            const username = extractGitHubUsername(member.github);
            const avatar = `https://github.com/${username}.png`;

            return (
              <div key={member.name} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md text-center">
                <img src={avatar} alt={member.name} className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 dark:border-zinc-600 object-cover mb-4" />
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.designation}</p>
                <div className="flex justify-center gap-4 mt-3 text-sm">
                  <a href={member.github} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                  <a href={member.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining Members - 4 in a Row, Image Left, Flex Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((member) => {
            const username = extractGitHubUsername(member.github);
            const avatar = `https://github.com/${username}.png`;

            return (
              <div key={member.name} className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img src={avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 dark:border-zinc-600" />
                <div className="text-center sm:text-left">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.designation}</p>
                  <div className="flex gap-2 justify-center sm:justify-start mt-1 text-sm">
                    <a href={member.github} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                    <a href={member.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}