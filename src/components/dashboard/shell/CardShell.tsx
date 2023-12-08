'use client'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { useQuery } from "@apollo/client";
import { GET_USER_REPOSITORIES } from "@/core/(graphql)/(prev)_/queries";
import SkeletonBar from "@/components/loaders/Skeleton";

export default function CardShell() {
    const [visibleCard, setVisibleCard] = useState([]);

    const { loading, error, data } = useQuery(GET_USER_REPOSITORIES, {
        variables: { login: 'remcostoeten', first: 5 },
        onCompleted: (data) => {
            setVisibleCard(data.user.repositories.nodes.map(node => node.id));
        }
    });

    if (error) return <p>Error: {error.message}</p>;

    if (loading) return (
        <CardShellSkeleton />
    );

    const repositories = loading ? [] : data.user.repositories.nodes;

    return (
        <>
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
                                        bucketId={repository.id}
                                        type="Repository"
                                        users={repository.stargazerCount}
                                        endpoint={`https://github.com/${repository.owner.login}/${repository.name}`}
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