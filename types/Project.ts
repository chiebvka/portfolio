import { PortableTextBlock } from "sanity";



export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    description: string,
    slug: string;
    url: string;
    github: string;
    livelink: string;
    category: { name: string, _id: string}[];
    technology: { name: string, _id: string }[];
    design: {
        designer: string;
        portfolio: string
    };
    client: string;
    content: PortableTextBlock[];
}