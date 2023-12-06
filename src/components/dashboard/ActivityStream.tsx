import React, { useEffect, useState } from 'react';
import { SelectContent, SelectGroup, SelectItem } from '../ui/select';
import { Select, SelectTriggerNoBg, SelectValue } from '../ui/selectnobg';
import { BsActivity } from 'react-icons/bs';

const ActivityStream: React.FC = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/remcostoeten/minimalistic-portfolio/commits?per_page=20'
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
    <div className="h-full">
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
          <li key={index} className='py-4'>
            <div className='flex items-center gap-2'>
              <BsActivity className='h-6 w-6  commit-icon text-white' />
              <span className='text-left flex flex-col gap-1'>
                {commit.commit.message.length > 45 ? `${commit.commit.message.slice(0, 45)}...` : commit.commit.message}
                <p className='text-xs text-muted-foreground'>
                  {new Date(commit.commit.author.date).toLocaleDateString()} - {commit.commit.author.name}
                </p>      </span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
};

export default ActivityStream;