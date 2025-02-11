import React from 'react'
import EditPersonalLink from '@/components/dialog/edit-personal-link'
import DeletePersonalLink from '@/components/dialog/delete-personal-link'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '../ui/button'

export default function PersonalCard({ data: { id, name, description, tag, href } }) {
    return (
        <div className="relative h-fit border rounded-md overflow-hidden hover:-translate-y-1 transition-all hover:shadow-md group">

            <EditPersonalLink itemId={id} />

            <DeletePersonalLink itemId={id} />

            <h3 className="h6 line-clamp-2 pt-12 px-4 bg-secondary">{name}</h3>

            <div className="p-4">
                {description && <p className=" leading-5 text-sm line-clamp-3">{description}</p>}

                <div className="pt-4 flex-between flex-row-reverse gap-2 justify-self-end flex-wrap">
                    <Link className={`${buttonVariants({ variant: "outline", size: "sm", })} hover:text-primary focus:text-primary`} href={href} target="_blank">
                        Open <ExternalLink className="h-4" />
                    </Link>
                    {tag && <Badge variant="secondary">{tag}</Badge>}
                </div>
            </div>
        </div>
    )
}
