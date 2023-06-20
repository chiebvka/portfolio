import { PortableTextBlock } from "sanity";

export type Article = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    url: string;
    content: PortableTextBlock[];
}