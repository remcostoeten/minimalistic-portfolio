'use client';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Input } from '@/components/ui/input';
import { Button } from '@nextui-org/react';
import RepositoriesList from './DisplayRepos';

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await createRepository({ variables: { name, description, visibility } });
            console.log(result);
        } catch (error) {
            console.error('Mutation error:', error);
        }
    };

    return (
        <>  <form className='flex flex-col gap-4 p-10' onSubmit={handleSubmit}>
            <label>
                Name:
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Description:
                <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Visibility:
                <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
                    <option value="PUBLIC">Public</option>
                    <option value="PRIVATE">Private</option>
                </select>
            </label>
            <Button type="submit">Create Repository</Button>
        </form>
            <RepositoriesList login="remcostoeten" />         </>
    );
}

export default CreateRepositoryForm;