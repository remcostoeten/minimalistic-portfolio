import React, { useEffect, useState } from 'react';
import { SelectContent, SelectGroup, SelectItem } from '../ui/select';
import { Select, SelectTriggerNoBg, SelectValue } from '../ui/selectnobg';
import { BsActivity } from 'react-icons/bs';
import { ActivityStreamSkeleton } from '../loaders/Skeleton';

const ActivityStream: React.FC = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://api.github.com/repos/remcostoeten/minimalistic-portfolio/commits?per_page=20'
        );
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
      setLoading(false);
    };

    fetchCommits();
  }, []);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center py-4 border-b border-[#262626]">
        <span className="text-lg font-semibold text-muted-foreground flex items-start">
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
        {loading ?
          Array(15).fill(0).map((_, index) => <ActivityStreamSkeleton key={index} />)
          :
          commits.slice(0, 15).map((commit: any, index: number) => (
            <li key={index} className='py-4'>
              <div className='flex items-center'>
                <div className='text-left flex flex-col gap-1 w-full'>
                  <div className='flex items-center gap-2'>
                    <BsActivity className='h-6 w-6  commit-icon text-white' />
                    <div className='text-left flex flex-col gap-1'>
                      <div className='text-left flex flex-col gap-1 w-4/5' style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {commit.commit.message.length > 45 ? `${commit.commit.message.slice(0, 45)}...` : commit.commit.message}
                      </div>
                      <div className='flex items-center flex-wrap-reverse text-[14px] gap-2 text-muted-foreground'>
                        {new Date(commit.commit.author.date).toLocaleDateString()}
                        <span> - </span>
                        {commit.commit.author.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div >
  )
};

export default ActivityStream;

