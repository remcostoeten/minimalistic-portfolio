// @ts-nocheck

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useContext, useState } from 'react';

function ModelSelector({ models, types }) {
    const [open, setOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState(models[0]);
    const [peekedModel, setPeekedModel] = useState(models[0]);
    const {
   
        isTypescript,
        setIsTypescript,
        isClientComponent,
        setIsClientComponent,
        wrapInFunctionComponent,
        setWrapInFunctionComponent,
        typeOrInterface,
        setTypeOrInterface,
    } = useContext(AppContext as any);

    const [collapsibleOpen, setCollapsibleOpen] = useState(false);

    return (
        <>
            <div className='flex w-full items-center justify-between space-x-2'>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.9, delay: 1.1 }}
                >
                    <div className='flex items-center justify-between space-x-2'>
                        <Label htmlFor='fc' className='flex flex-col space-y-1'>
                            <span className='flex flex-col space-y-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 '>
                                Functional component
                            </span>
                        </Label>
                        <Switch
                            id='fc'
                            checked={wrapInFunctionComponent}
                            onCheckedChange={(isChecked) => {
                                setCollapsibleOpen(isChecked);
                                setWrapInFunctionComponent(isChecked);
                            }}
                        />
                    </div>
                </motion.div>
            </div>
            <div className='flex w-full items-center justify-between space-x-2'>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.9, delay: 1.2 }}
                >
                    <div className='flex items-center justify-between space-x-2'>
                        <Label
                            htmlFor='client'
                            className='flex flex-col space-y-1'
                        >
                            <span className='font-normal leading-snug '>
                                Prefix with 'use client'
                            </span>
                        </Label>
                        <Switch
                            id='client'
                            checked={isClientComponent}
                            onCheckedChange={(isChecked) => {
                                setIsClientComponent(isChecked);
                            }}
                        />
                    </div>
                </motion.div>
            </div>
            <Collapsible
                open={collapsibleOpen}
                onOpenChange={setCollapsibleOpen}
            >
                <AnimatePresence>
                    {collapsibleOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, x: -15, scale: 0, height: 0 }}
                            transition={{ duration: 0.55 }}
                        >
                            <CollapsibleContent>
                                <div className='grid gap-6'>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                            scale: 0.5,
                                        }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -15, scale: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className='flex w-full items-center justify-between space-x-2'>
                                            <Label
                                                htmlFor='typescript'
                                                className='flex flex-col space-y-1'
                                            >
                                                <span className='flex flex-col space-y-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 '>
                                                    Typescript
                                                </span>
                                            </Label>
                                            <Switch
                                                id='typescript'
                                                checked={isTypescript}
                                                onCheckedChange={(
                                                    isChecked
                                                ) => {
                                                    setIsTypescript(isChecked);
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                            scale: 0.5,
                                        }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -15, scale: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className='flex w-full items-center justify-between space-x-2'>
                                            <Label
                                                htmlFor='typeOrInterface'
                                                className='flex flex-col space-y-1'
                                            >
                                                <span className='flex flex-col space-y-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 '>
                                                    Type or Interface?
                                                </span>
                                            </Label>
                                            <Switch
                                                id='typeOrInterface'
                                                checked={typeOrInterface}
                                                onCheckedChange={(
                                                    isChecked
                                                ) => {
                                                    setTypeOrInterface(
                                                        isChecked
                                                    );
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </CollapsibleContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Collapsible>
        </>
    );
}

export default ModelSelector;
