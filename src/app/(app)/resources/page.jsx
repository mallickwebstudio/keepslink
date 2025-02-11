"use client";
import SparkleText from "@/components/other/sparkle-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

const defaultList = ["UI/UX Designer",
  "Content Writer",
  "Video Editor",
  "Digital Marketer",
  "SEO Specialist",
  "Social Media Manager",
  "Illustrator",
  "Animator",
  "Photographer",
  "Copywriter",
  "Data Scientist",
  "App Developer",
  "Product Designer",
  "3D Artist",
  "Brand Strategist",
  "Email Marketer",
  "Voiceover Artist",
  "Game Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Cybersecurity Expert",
  "Cloud Architect",
  "AI/ML Specialist",
  "Technical Writer",
  "Virtual Assistant",
];

export default function Page() {
  const [item, setItem] = useState(defaultList[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        index = (index + 1) % defaultList.length;
        setItem(defaultList[index]);
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="size-full flex-center">
      <div className="mx-auto md:max-w-md">
        <h1 className="text-center h2 md:h1">
          Curated Websites For
          <br />
          <span
            className={cn("mx-auto block -my-3 py-4 w-fit rounded transition-all duration-500 text-nowrap overflow-hidden",
              animate ? "w-0" : "w-full"
            )}
          >
            <span
              className={cn("px-2 transition-all duration-500 overflow-hidden",
                animate ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            >
              <SparkleText text={item} />
            </span>
          </span>
        </h1>
        <div className="flex-center">
          <Link className={buttonVariants()} href="/resources">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
}
