'use client';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Input } from '@/components/ui/input';
import { Button } from '@nextui-org/react';
import RepositoriesList from './DisplayRepos';
import { toast } from 'sonner';
import { auth } from '@/core/(database)/firebase';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CREATE_REPOSITORY = gql`
    mutation CreateRepository($name: String!, $description: String!, $visibility: RepositoryVisibility!) {
        createRepository(input: {name: $name, description: $description, visibility: $visibility}) {
            repository {
                id
                name
                description
            }
        }
    }
`;

function CreateRepositoryForm() {
    const [createRepository, { data }] = useMutation(CREATE_REPOSITORY);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('PUBLIC');

    const user = auth.currentUser;
    const admin = 'stoetenremco.rs@gmail.com';

    if (user?.email !== admin) {
        toast.success('You must be an admin to post');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await createRepository({ variables: { name, description, visibility } });
            console.log(result);
            toast.success('Repository' + name + 'created 🎉');
        } catch (error) {
            console.error('Mutation error:', error);
            toast.error('Error creating repository');
        }
    };

    return (
        <>
            <form className='flex flex-col gap-4 p-10' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Public" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="PUBLIC">Public</SelectItem>
                        <SelectItem value="PRIVATE">Private</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant='faded' type="submit" disabled={user?.email !== admin}>
                    {user?.email === admin ? 'Create Repository' : 'You must be an admin to post'}
                </Button>

            </form >
            <RepositoriesList login="remcostoeten" />
        </>
    );
}

export default CreateRepositoryForm;