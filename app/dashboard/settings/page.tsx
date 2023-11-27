/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RnzlhslLlLp
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-200 dark:bg-gray-800">
            <Card className="max-w-3xl">
                <CardHeader className="bg-gray-100 dark:bg-gray-700 p-5">
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">User Profile Update</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                        Update your profile details
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-5">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                                htmlFor="avatar"
                            >
                                Current Avatar
                            </Label>
                            <img
                                alt="Current avatar"
                                className="rounded-full mb-4"
                                height="100"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                                htmlFor="new-avatar"
                            >
                                New Avatar
                            </Label>
                            <Input
                                className="appearance-none block w-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="new-avatar"
                                type="file"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                                htmlFor="first-name"
                            >
                                First name
                            </Label>
                            <Input
                                className="appearance-none block w-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500"
                                id="first-name"
                                placeholder="John"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </Label>
                            <Input
                                className="appearance-none block w-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500"
                                id="email"
                                placeholder="johndoe@example.com"
                                required
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </Label>
                            <Input
                                className="appearance-none block w-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500"
                                id="password"
                                required
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <Label
                                className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
                            >
                                Role
                            </Label>
                            <Select
                                // className="block appearance-none w-full bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-gray-500"
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Roles</SelectLabel>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="user">User</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-gray-100 dark:bg-gray-700 p-5">
                    <div className="flex items-center justify-between">
                        <Button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                            type="submit"
                        >
                            Update Information
                        </Button>
                        <Button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                            type="button"
                            variant="destructive"
                        >
                            <IconTrash className="fill-current h-4 w-4 mr-2" />
                            Delete Account
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

function IconTrash(props) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}
