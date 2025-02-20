import ItemCard from "@/components/card/item-card";
import { datas } from "@/lib/database"
import { siteConfig } from "@/lib/metadata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return datas.flatMap((data) =>
        [
            { slug: data.slug }, // Main slug
        ]
    );
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const filteredData = datas.find((item) => item.slug === slug);

    return {
        title: filteredData?.title + " resources ",
        description: `Explore top ${filteredData?.title} resources curated by KeepsLink to enhance your workflow.`,
        alternates: {
            canonical: siteConfig.baseUrl + "/resources/" + slug
        },
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    const filteredData = datas.find((item) => item.slug === slug);
console.log("CA Test~", siteConfig.baseUrl + "/resources/" + slug)
    if (!filteredData) {
        return notFound()
    }

    return (
        <>
            <h1 className="text-center">{filteredData?.title}</h1>
            {filteredData?.category?.map(item => (
                <section key={item.title + "Section"} id={item.slug}>
                    <div className="mx-auto">
                        <h2 className="text-primary">{item?.title}</h2>
                    </div>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
                        {item?.cards?.map((item, i) => (
                            <ItemCard data={item} key={item.name + "Card" + i} />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
}
