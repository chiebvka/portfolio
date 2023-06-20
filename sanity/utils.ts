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
        }`
    )
}

export async function getArticles(): Promise<Article[]> {
    return client.fetch(
        groq`*[_type == "article"]{
            _id,
            _createdAt,b   
            name,
            category,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
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
     
        }`
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
        category[]-> {   
          name,
          _id
        }
    }` 
    )
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