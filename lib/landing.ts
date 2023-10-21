export type Job = {
    year: string;
    company: string;
    position: string;
    date?: string;
    description?: string;
    highlight?: boolean;
  };
  
  export type ExperienceProps = {
    job: Job;
  };
  