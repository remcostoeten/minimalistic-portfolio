import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client/core"
import { Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SkeletonBar from "@/components/loaders/Skeleton"

const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        totalCount
        nodes {
          id
          name
          description
        }
      }
    }
  }
`

function RepositoriesList({ login }) {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { login },
  })

  if (loading) return <SkeletonBar />
  if (error) return `Error! ${error.message}`

  return (
    <div className="flex flex-col gap-4 p-10 text-white">
      <h2 className="text-2xl font-bold">
        Repositories ({data.user.repositories.totalCount})
      </h2>
      {data.user.repositories.nodes.map((repo) => (
        <div key={repo.id} className="p-4 border border-gray-600 rounded">
          <h3 className="text-xl font-semibold">{repo.name}</h3>
          <p className="text-gray-400">{repo.description}</p>
          <Dialog>
            <DialogTrigger>
              <Trash2Icon />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  this repository from Github.
                  <Button onClick={() => repo.id} variant="ghost">
                    Yes, delete
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  )
}

export default RepositoriesList
