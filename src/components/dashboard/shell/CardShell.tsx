'use client'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { ApolloError, useQuery } from "@apollo/client";
import { GET_USER_REPOSITORIES } from "@/core/(graphql)/(prev)_/queries";
import SkeletonBar from "@/components/loaders/Skeleton";
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useUsername } from '@/hooks/useUsername';

type CardShellProps = {
    error: ApolloError | undefined;
};

export default function CardShell({ error }: CardShellProps) {
    const [visibleCard, setVisibleCard] = useState([]);
    const [query, setQuery] = useState('remcostoeten');
    const [username, setUsername] = useUsername();
    const [inputValue, setInputValue] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);

    const { loading, data, refetch } = useQuery(GET_USER_REPOSITORIES, {
        variables: { login: query, first: 5 },
        onCompleted: (data) => {
            setVisibleCard(data.user.repositories.nodes.map(node => node.id));
            setUserNotFound(false);
        },
        onError: (error) => {
            if (error.message.includes('Could not resolve to a User')) {
                setUserNotFound(true);
            }
        }
    });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setUsername(inputValue);
        await refetch({ login: inputValue, first: 5 });
    };

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (loading) return <CardShellSkeleton />;

    const repositories = loading ? [] : [...data.user.repositories.nodes];

    repositories.sort((a, b) => {
        const commitsA = a.ref?.target?.history?.totalCount || 0;
        const commitsB = b.ref?.target?.history?.totalCount || 0;

        return commitsB - commitsA;
    });

    const user = data.user;
    return (
        <>
            <form className="relative text-gray-600 w-full" onSubmit={handleSubmit}>
                <input type="search" name="serch" placeholder="Search" className="bg-transparent border border-dash h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <SearchIcon />
                </button>
            </form>
            {repositories.map((repository) => {
                let formattedDate = 'Invalid date';

                if (typeof repository.createdAt === 'string') {
                    const date = new Date(repository.createdAt);
                    if (!isNaN(date.getTime())) {
                        formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
                    }
                }

                return (
                    <div key={repository.id}>
                        <CardHeader
                            title={repository.name}
                            toggleCardbody={() => {
                                if (visibleCard.includes(repository.id)) {
                                    setVisibleCard(visibleCard.filter(id => id !== repository.id));
                                } else {
                                    setVisibleCard([...visibleCard, repository.id]);
                                }
                            }}
                        />
                        <AnimatePresence>
                            {visibleCard.includes(repository.id) && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CardBody
                                        loading={loading}
                                        created={formattedDate}
                                        name={repository.name}
                                        description={repository.description}
                                        open_issues_count={repository.issues.totalCount}
                                        language={repository.languages.nodes.map(lang => lang.name).join(', ')} updated_at={repository.updatedAt}
                                        created_at={formattedDate}
                                        clone_url={repository.url}
                                        homepage={repository.homepageUrl}
                                    />
                                </motion.div >
                            )
                            }
                        </AnimatePresence >
                        <CardFooter button="view repository" href={`https://github.com/${repository.owner.login}/${repository.name}`} />
                    </div >
                );
            })}
        </>
    );
}

const CardShellSkeleton = () => {
    return (
        <div>
            <div className="bg-dash border-b border-dash gap-2 ounded-t flex  items-center p-4">
                <SkeletonBar dark width={40} height={4} />
                <SkeletonBar dark width={20} height={8} />
                <SkeletonBar dark width={20} height={8} />
            </div>
            <div className="bg-[#1a1a1a] text-white">
                <div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar dark width={40} height={4} />
                        </div>
                    </div>
                </div>
            </div>


            <footer className="bg-[#1a1a1a] border-dash border-t p-4 flex justify-between rounded-b skeleton-footer">
                <div className="flex items-center space-x-6">
                    <SkeletonBar dark width={20} height={8} />
                </div>
                <div className="flex space-x-2">
                    <SkeletonBar dark width={20} height={8} />
                </div>
            </footer>
        </div>
    )
}