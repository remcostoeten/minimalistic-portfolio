import { useQuery } from "@apollo/client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectValue } from "../ui/select";
import { SelectTriggerNoBg } from "../ui/selectnobg";
import { GET_COMMITS } from "../(database)/graphql/queries/CommitQuery";
import Spinner from "../loaders/Spinners";
import { JSX, SVGProps } from "react";
import Getcommits from "../(database)/graphql/Getcommits";

export default function ActivityStream() {
  type ActivityStreamProps = {
    date: string;
    author: string;
  }


  const DateAuthorText = ({ date, author }: ActivityStreamProps) => {
    return (
      <p className="text-[12px]  text-[#989898] ml-[32px]">{date} - {author}</p>
    )
  }
  const { loading, error, data } = useQuery(GET_COMMITS, {
    variables: { login: "remcostoeten" },
  });

  if (!loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  if (!data?.user?.repositories?.nodes) {
    return 'No data available';
  }

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  let activities = [];
  data.user.repositories.nodes.forEach((repo: { defaultBranchRef: { target: { history: { nodes: any; }; }; }; }) => {
    if (repo.defaultBranchRef) {
      const commits = repo.defaultBranchRef.target.history.nodes;
      commits.forEach((commit) => {
        activities.push({
          title: commit.messageHeadline,
          date: new Date(commit.committedDate).toLocaleDateString(),
          author: commit?.author?.user.name,
          icon: IconEdit,
        });
      });
    }
  });

  // Optionally, you can sort activities by date here if needed
  activities.slice(50).sort((a, b) => (new Date(b.date) as any).getTime() - (new Date(a.date) as any).getTime());


  //   const CommitsList: React.FC<{ owner: string; repoName: string }> = ({ owner, repoName }) => {
  //     const { loading, error, data } = useQuery(GET_COMMITS, {
  //         variables: { owner, name: repoName },
  //     });

  //     if (loading) return <p>Loading commits...</p>;
  //     if (error) return <p>Error fetching commits</p>;

  //     if (!data || !data.repository || !data.repository.ref || !data.repository.ref.target || !data.repository.ref.target.history) {
  //         return <p>No commit data available</p>;
  //     }

  //     const commits: Commit[] = data.repository.ref.target.history.edges;

  //     return (
  //         <ul>
  //             {commits.map((commit: Commit) => (
  //                 <li key={commit.node.oid}>{commit.node.messageHeadline}</li>
  //             ))}
  //         </ul>
  //     );
  // };
  console.log(activities[0]?.title);

  activities = activities.slice(0, 50);

  // const activities = [
  //   {
  //     title: '147 files were uploaded to Basic bucket',
  //     date: 'January 6, 2023',
  //     author: 'Leonard Lauren',
  //     icon: IconDownload,
  //   },
  //   {
  //     title: '2 users were added to manage Basic bucket',
  //     date: 'February 05, 2023',
  //     author: 'Leonard Lauren',
  //     icon: IconUpload,
  //   },
  //   {
  //     title: '1 folder was added to Basic bucket',
  //     date: 'March 12, 2023',
  //     author: 'Jerome Bell',
  //     icon: IconEdit,
  //   },
  // ];



  return (
    <div className=" h-full bg-[#101010] shadow-lg">
      <div className="flex justify-between items-center p-4 border-b border-[#262626]">
        <span className="text-lg font-semibold text-white flex items-start">
          Recent Actions
        </span>
        <Getcommits />
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
        {activities.map((activity, index) => (
          <li key={index} className="p-4">
            <span className="text-sm font-medium text-white flex items-start mb-1">
              <activity.icon className="h-6 w-6 text-white mr-2" />
              {activity.title}
            </span>
            <DateAuthorText date={activity.date} author={activity.author} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function IconDotsvertical(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}

function IconEdit(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}

function IconUpload(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
function IconDownload(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}