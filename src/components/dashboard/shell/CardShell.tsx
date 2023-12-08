
import { GET_USER_DETAILS, GET_USER_REPOSITORIES } from "@/core/(graphql)/(prev)_/queries";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useQuery } from "@apollo/client";

export default function CardShell() {
    const { loading, error, data } = useQuery(GET_USER_REPOSITORIES, {
        variables: { login: 'remcostoeten', first: 5 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const repositories = data.user.repositories.nodes;

    return (
        <>
            {repositories.map((repository) => (
                <div key={repository.id}>
                    <CardHeader button="Some button" title={repository.name} />
                    <CardBody
                        created={repository.createdAt}
                        bucketId={repository.id}
                        type="Repository" // or any other type you want to display
                        users={repository.stargazerCount}
                        endpoint={`https://github.com/${repository.owner.login}/${repository.name}`}
                    // Include other fields as needed
                    />
                    <CardFooter button="some text" href={`/repos/${repository.owner.login}/${repository.name}`} />
                </div>
            ))}
        </>
    );
}