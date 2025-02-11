import { datas } from '@/lib/database'
import React from 'react'

export default function RegenerateData() {
    const generateId = () => `${Math.random().toString(36).substr(2, 9)}`;
    return (
        <div className="mt-12 p-4 bg-secondary rounded-md">
            {datas.map(category => (
                <pre className="" key={category.title}>
                    {"{"} <br />
                    slug: &quot;{category.slug}&quot;, <br />
                    href: &quot;{category.href}&quot;, <br />
                    title: &quot;{category.title}&quot;, <br />
                    category:[
                    {category.category.map(subCat => (
                        <div key={subCat.title}>
                            {"{"}<br />
                            slug: &quot;{subCat.slug}&quot;,<br />
                            href: &quot;{subCat.href}&quot;,<br />
                            title: &quot;{subCat.title}&quot;,<br />
                            cards: [
                            {subCat.cards.map((card, i) => (
                                <div key={card.name + i}>
                                    {"{"}<br />
                                    id: &quot;{generateId()}&quot;,<br />
                                    name: &quot;{card.name}&quot;,<br />
                                    description: &quot;{card.description}&quot;,<br />
                                    href: &quot;{card.href}&quot;,<br />
                                    {card.thumbnail && <>thumbnail: &quot;{card.thumbnail}&quot;,<br /></>}
                                    tag: &quot;{card.tag}&quot;<br />
                                    {"},"}
                                </div>
                            ))}
                            ]
                            {"},"}
                        </div>
                    ))}
                    ]
                    {"},"}
                </pre>
            ))}

        </div>
    )
}
