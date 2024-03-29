    import { createClient, groq } from "next-sanity";
    import { client } from "./lib/client";
import { Project } from "@/types/Project";
import { Article } from "@/types/Article";


export async function getPets() {

    return client.fetch(
        groq`*[_type == "pet"]{
            _id,
            _createdAt,
            name,
        }` , { cache: 'no-store' }
    )
}





export async function getProjects(): Promise<Project[]> {

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            description,
            client,
            github,
            livelink, 
            technology[]-> {
                name
            },
            category[]-> {
                name
            },
            design->{designer, portfolio},
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
     
        }`, { cache: 'no-store' }
    )
}


export async function getProject(slug: string): Promise<Project>{

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug] [0]  {
            _id,
            _createdAt,
            name,
            description,
            client,
            github,
            livelink, 
            technology[]-> {
                name
            },
            category[]-> {
                name
            },
            design->{designer, portfolio},
            "slug": slug.current,
            "image": image.asset->url,
            url,  
            content 
        }`,
        { slug }
    )
}


export async function getArticle(slug: string): Promise<Article>{
    return client.fetch(
        groq`*[_type == "article" && slug.current == $slug] [0] {
            _id,
            _createdAt,   
            name,
            category[]-> {
                name
            },
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`, 
        { slug }
    )
}


export async function getfeaturedPorjects(): Promise<Project[]>{
    return client.fetch(
       groq`*[_type == "project" && references('2cb82b8b-1988-41da-8ef2-e71a855a20ae')] [0...3]{
        _id,
        name,
        _createdAt,
        description,
        client,
        github,
        livelink,
        url,
        technology[]-> {
          name,
          _id
        },
        category,
        design->{designer, portfolio},
        "slug": slug.current,
        "image": image.asset->url,
        category[]-> {   
          name,
          _id
        }
    }` ,{ cache: 'no-store' }
    )
}


export async function getArticles(): Promise<Article[]> {
    return client.fetch(
        groq`*[_type == "article"]{
            _id,
            _createdAt,   
            name,
            category[]-> {
                name
            },
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content[] {
                _type == "image" => {
                    asset->
                }
            }
        }` , { cache: 'no-store' }
    )
}



// Open Graph Images for Twitter and Facebook
export function getOgImageUrl(
    title: string,
    subTitle: string,
    tags: Array<string>,
    slug: string,
  ) {
    const uri = [
      `?title=${encodeURIComponent(title)}`,
      `&subTitle=${encodeURIComponent(subTitle)}`,
      `${tags.map((tag) => `&tags=${encodeURIComponent(tag)}`).join("")}`,
      `&slug=${encodeURIComponent(slug)}`,
      // Joining a multiline string for readability.
    ].join("");
  
    return `${getUrl()}/api/og${uri}`;
  }
  


export function getUrl() {
    if (process.env.NODE_ENV === "development") {
      return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    } else {
      return process.env.NEXT_PUBLIC_WEB_URL || "https://www.chiebvka.dev/";
    }
  }
  


// category[]-> {
//     category
// },
// technology[]-> {
//     name
// },

// content

// *[_type == "project"]{
//     _id,
//     name,
//     _createdAt,
//     description,
//     client,
//     github,
//     livelink,
//     url,
//     technology[]-> {
//       name
//     },
//     design->{designer, portfolio},
//     category[]-> {
//       category
//     }
// }


// *[_type == "project"]{
//     _id,
//     name,
//     _createdAt,
//     description,
//     client,
//     github,
//     livelink,
//     url,
//     technology[]-> {
//       name
//     },
//     "designer":  design->{designer},
//     "designerPortfolio":  design->{portfolio},
//     design->{designer, portfolio},
//     category[]-> {
//       category
//     }
// }


// *[_type == "project" && references('2cb82b8b-1988-41da-8ef2-e71a855a20ae') ]{
//     _id,
//     name,
//     _createdAt,
//     description,
//     client,
//     github,
//     livelink,
//     url,
//     technology[]-> {
//       name
//     },
//     "designer":  design->{designer},
//       category,
//     "designerPortfolio":  design->{portfolio},
//     design->{designer, portfolio},
//     category[]-> {
//       category
//     }
// }