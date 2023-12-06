import React, { useEffect, useState } from 'react';
import { SelectContent, SelectGroup, SelectItem } from '../ui/select';
import { Select, SelectTriggerNoBg, SelectValue } from '../ui/selectnobg';

const ActivityStream: React.FC = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/remcostoeten/remcostoeten/commits?per_page=20'
        );
        const data = await response.json();
        console.log(data)
        setCommits(data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchCommits();
  }, []);

  const countCommitsByDate = () => {
    const counts = {};

    commits.forEach((commit: any) => {
      const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
      counts[date] = (counts[date] || 0) + 1;
    });

    return counts;
  };

  const commitCounts = countCommitsByDate();


  return (
    <div className=" h-full bg-[#101010] shadow-lg">
      <div className="flex justify-between items-center p-4 border-b border-[#262626]">
        <span className="text-lg font-semibold text-white flex items-start">
          Recent Actions
        </span>

        <Select>
          <SelectTriggerNoBg className="w-[180px]">
            <SelectValue placeholder="..." />
          </SelectTriggerNoBg>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Some">Some</SelectItem>
              <SelectItem value="options">options</SelectItem>
              <SelectItem value="blueberry">blueberry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ul className="divide-y divide-[#262626]">
        {commits.map((commit: any, index: number) => (
          <li key={index}>
            {commit.sha}: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityStream;