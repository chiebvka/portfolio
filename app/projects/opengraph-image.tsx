/* eslint-disable @next/next/no-img-element */

 
import React from 'react'
import { ImageResponse } from "next/server"
import { getProject } from '@/sanity/utils'

 
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

 
type Props = {
    params: {
        slug: string; 
        project: string 
    }
}

export default async function Image({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug)  

    if (!project) {
      // Handle the case where the project is not found
      return <div>Project not found</div>;
    }

  return new ImageResponse( (

    <div tw='relative flex w-full h-full items-center justify-center'>
        <div tw="absolute flex inset-0">
          <img tw='flex flex-1' src={project?.image} alt={project?.name} />
          <div tw="absolute flex inset-0 bg-black bg-opacity-50 -10" />
        </div>
        <div tw="flex flex-col text-neutral-50">{project?.name}</div>
    </div>
  ),
  {
    ...size,
  }
  )
}