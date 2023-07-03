import { PortableTextBlock } from "sanity";

export type Article = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    url: string;
    image: string;
    category: { name: string, _id: string}[];
    content: PortableTextBlock[];
}