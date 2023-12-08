import { getArticles, getProject, getProjects } from '@/sanity/utils'
import { MetadataRoute } from 'next'

type Props = {
    params: {
        slug: string; 
        project: string 
    }
}

export default async function sitemap ({params}: Props) {
    const baseurl = "https://www.chiebvka.dev"

    // get all projects from cms 
    // const slug = params.project;
    const projects = await getProjects();

    const projecturl = projects?.map((project) => {
        return {
            url: `${baseurl}/projects/${project.slug}`,
            lastModified : new Date()
        }
    }) ?? [];


    // get all posts from cms 
    const articles = await getArticles();
    
    const articleurl = articles?.map((article) => {
        return {
            url: `${baseurl}/articles/${article.slug}`,
            lastModified : new Date()
        }
    }) ?? [];


    return [
        {
          url: baseurl,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        ...projecturl,
        ...articleurl,
      ]
}