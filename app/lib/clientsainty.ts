import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId ,token} from "../.env.local"

export const client = createClient({
  token : process.env.SAINTY_ACCESS_TOKEN,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:"production",
  apiVersion:"v2024-12-27",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})