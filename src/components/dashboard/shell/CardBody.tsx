import { CardContent, Card } from "@/components/ui/card"

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
    fileLifecycle = "Keep all versions"
}: ComponentProps) {
    return (
        <div className="bg-[#1a1a1a] text-white">
            <div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div>
                        <div className="font-bold">Created:</div>
                        <div>{created}</div>
                    </div>
                    <div>
                        <div className="font-bold">Bucket ID:</div>
                        <div>{bucketId}</div>
                    </div>
                    <div>
                        <div className="font-bold">Type:</div>
                        <div>{type}</div>
                    </div>
                    <div>
                        <div className="font-bold">Users:</div>
                        <div>{users}</div>
                    </div>
                    <div>
                        <div className="font-bold">Endpoint:</div>
                        <div>{endpoint}</div>
                    </div>
                    <div>
                        <div className="font-bold">Encryption:</div>
                        <div>{encryption}</div>
                    </div>
                    <div>
                        <div className="font-bold">Current files:</div>
                        <div>{currentFiles}</div>
                    </div>
                    <div>
                        <div className="font-bold">Current size:</div>
                        <div>{currentSize}</div>
                    </div>
                    <div>
                        <div className="font-bold">File lifecycle:</div>
                        <div>{fileLifecycle}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}