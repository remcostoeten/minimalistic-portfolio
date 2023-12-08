
import { GET_USER_DETAILS, GET_USER_REPOSITORIES } from "@/core/(graphql)/(prev)_/queries";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useQuery } from "@apollo/client";
import { SkeletonBar } from "@/components/loaders/Skeleton";

export default function CardShell() {
    const { loading, error, data } = useQuery(GET_USER_REPOSITORIES, {
        variables: { login: 'remcostoeten', first: 5 },
    });

    if (error) return <p>Error: {error.message}</p>;

    if (loading) return (
        <>
            <CardShellSkeleton />
        </>
    );

    const repositories = loading ? [] : data.user.repositories.nodes;

    return (
        <>
            <CardShellSkeleton />
            {repositories.map((repository) => (
                <div key={repository.id}>
                    <CardHeader button="Some button" title={repository.name} />
                    <CardBody
                        loading={loading}
                        created={repository.createdAt}
                        bucketId={repository.id}
                        type="Repository"
                        users={repository.stargazerCount}
                        endpoint={`https://github.com/${repository.owner.login}/${repository.name}`}
                    />
                    <CardFooter button="some text" href={`/repos/${repository.owner.login}/${repository.name}`} />
                </div>
            ))}
        </>
    );
}

const CardShellSkeleton = () => {
    return (
        <div>
            <div className="bg-dash border-b border-dash gap-2 ounded-t flex  items-center p-4">
                <SkeletonBar width={40} height={4} />
                <SkeletonBar width={20} height={8} />
                <SkeletonBar width={20} height={8} />
            </div>
            <div className="bg-[#1a1a1a] text-white">
                <div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                        <div>
                            <SkeletonBar width={40} height={4} />
                        </div>
                    </div>
                </div>
            </div>


            <footer className="bg-[#1a1a1a] border-dash border-t p-4 flex justify-between rounded-b skeleton-footer">
                <div className="flex items-center space-x-6">
                    <SkeletonBar width={20} height={8} />
                </div>
                <div className="flex space-x-2">
                    <SkeletonBar width={20} height={8} />
                </div>
            </footer>
        </div>
    )
}