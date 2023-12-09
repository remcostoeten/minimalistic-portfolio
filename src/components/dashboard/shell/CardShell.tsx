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
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {repositories.map((repository) => {
                let formattedDate = 'Invalid date';

                if (typeof repository.createdAt === 'string') {
                    const date = new Date(repository.createdAt);
                    if (!isNaN(date.getTime())) {
                        formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                    }
                }

                return (
                    <div key={repository.id}>
                        <CardHeader
                            button="Some button"
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
                                        stargazers_count={repository.stargazers_count}
                                        forks_count={repository.forks_count}
                                        open_issues_count={repository.open_issues_count}
                                        language={repository.language}
                                        updated_at={repository.updated_at}
                                        created_at={repository.created_at}
                                        clone_url={repository.clone_url}
                                        homepage={repository.homepage}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <CardFooter button="view repository" href={`https://github.com/${repository.owner.login}/${repository.name}`} />
                    </div>
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