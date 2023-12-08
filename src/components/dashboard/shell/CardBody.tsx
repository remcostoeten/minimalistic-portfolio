import { CardContent, Card } from "@/components/ui/card"

import React from 'react';

type ComponentProps = {
    created?: string;
    bucketId?: string;
    type?: string;
    users?: number;
    endpoint?: string;
    encryption?: string;
    currentFiles?: number;
    currentSize?: string;
    fileLifecycle?: string;
    loading?: boolean;
}

export default function CardBody({
    created = "January 16, 2023",
    bucketId = "5d1acd2cb5446c508967011b",
    type = "Private",
    users = 7,
    endpoint = "fc3.us.datadock.com",
    encryption = "Enabled",
    currentFiles = 1372,
    currentSize = "29.48 gigabytes",
    fileLifecycle = "Keep all versions",
    loading = true,
}: ComponentProps) {
    return (
        <div className="bg-[#1a1a1a] text-white">
            <div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div>
                        <div className="font-bold">Created:</div>
                        <div>{loading ? <div className="skeleton h-8 w-12" /> : created}</div>
                    </div>
                    <div>
                        <div className="font-bold">Bucket ID:</div>
                        <div>{loading ? <div className="skeleton h-8 w-12" /> : bucketId}</div>
                    </div>
                    <div>
                        <div className="font-bold">Type:</div>
                        <div>{loading ? <div className="skeleton h-8 w-12" /> : type}</div>
                    </div>
                    <div>
                        <div className="font-bold">Users:</div>
                        <div>{loading ? <div className="skeleton h-8 w-12" /> : users}</div>
                    </div>
                    <div>
                        <div className="font-bold">Endpoint:</div>
                        <div>{loading ? <div className="skeleton h-8 w-12" /> : endpoint}</div>
                    </div>
                    <div>
                        <div className="font-bold">Encryption:</div>
                        <div>{loading ? <div className="skeleton h-8 w-full" /> : encryption}</div>
                    </div>
                    <div>
                        <div className="font-bold">Current files:</div>
                        <div>{loading ? <div className="skeleton h-8 w-full" /> : currentFiles}</div>
                    </div>
                    <div>
                        <div className="font-bold">Current size:</div>
                        <div>{loading ? <div className="skeleton h-8 w-full" /> : currentSize}</div>
                    </div>
                    <div>
                        <div className="font-bold">File lifecycle:</div>
                        <div>{loading ? <div className="skeleton h-8 w-full" /> : fileLifecycle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}