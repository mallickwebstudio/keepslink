"use client"
import { useLocalStorage } from "@/hooks/use-localstorage";
import PersonalCard from "@/components/card/personal-card";
import AddPersonalLink from "@/components/dialog/add-personal-link";

export default function GeneratedSection() {
    const { personalItems } = useLocalStorage();

    return (
        <section id="personal-card">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
                {personalItems.map(item => (
                    <PersonalCard data={item} key={item.id + "PersonalCard"} />
                ))}
                <AddPersonalLink />
            </div>
        </section>
    )
}
