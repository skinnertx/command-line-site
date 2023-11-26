# Command Line Website

## Overview

This website is a project that serves as my first ever personal website, as well as a means to learn HTML/CSS/Javascript. The intro animation was inspired by the [gun rack scene](https://www.youtube.com/watch?v=lVlHCGPpGCc) from the first Matrix movie. After that I sought to deliver information about myself via an emulation of a linux command terminal.

## Tech Stack

I built this site using [Next.js](https://nextjs.org/docs), a framework for React. The 3D animation was put together using the [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [React Three Drei](https://github.com/pmndrs/drei) libraries. I also made use of [Typed.js](https://github.com/mattboldt/typed.js) for text animation on the final site. Lastly, this repository is monitored, deployed, and hosted automatically using [Netlify](https://www.netlify.com/).

## Getting Started

After forking the repository to local, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

I've written up a blog post on medium that describes how I built the site, as well as some of the finer implementation details. Check it out [here](https://medium.com/@gus.caldwell/my-personal-website-journey-40d4d49e3cea)

## Still to Come

Here are some of the things I plan to add in the future:

- unit tests for UI components
- Use github actions to automate testing and deployment
- more custom commands 
