### NextAuth Session Modal Timeout

<video autoplay loop muted playsinline  src="https://user-images.githubusercontent.com/18267052/229717250-4dc95098-8b6b-4154-9e00-a51cf2cd2480.mp4" type="video/mp4"> 
</video>
 <br/>
 
* Tailwind Responsive Utility Class Design  
With responsive utility classes, you can ensure your logout countdown session timer modal adapts smoothly to different screen sizes.

* Seamless Integration with NextAuth
NextAuth is a popular authentication library for Next.js applications, allowing you to add OAuth providers like Google, Facebook, and Twitter, among others. The logout countdown session timer modal can be easily integrated with NextAuth's session management capabilities, ensuring a seamless experience for users when they sign in or out.

* Real-time Countdown Timer
Real-time countdown that shows users the time remaining until their session expires. This allows users to be aware of their session status and make informed decisions about extending or ending their sessions.

* Session Extension Functionality
Another functional highlight of the logout countdown session timer modal is the ability for users to extend their sessions with a single click. This feature ensures that users don't get logged out unintentionally, preserving their work and maintaining a seamless user experience.

* Secure Logout Option
To further enhance security, the logout countdown session timer modal provides users with a clear and straightforward logout option. By clicking the "Logout" button, users can end their session and ensure that their account is secure, especially when using shared devices.

   <br/>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth&style=flat-square">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-example">
        <img src="https://img.shields.io/bundlephobia/minzip/next-auth?label=size&style=flat-square" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/next-auth">
        <img src="https://img.shields.io/npm/dm/next-auth?label=downloads&style=flat-square" alt="Downloads" />
      </a>
      <a href="https://npm.im/next-auth">
        <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square" alt="TypeScript" />
      </a>
      <p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank">
   <img height="64" src="https://authjs.dev/img/logo/logo-sm.png" />
   </a>
   <a href="https://nextjs.org" target="_blank">
   <img height="64" src="https://nextjs.org/static/favicon/android-chrome-192x192.png" />
   </a>
   <h3 align="center"><b>NextAuth.js</b> - Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
  
   </p>
 


  > The example repository is maintained from a [monorepo](https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs). Pull Requests should be opened against [`nextauthjs/next-auth`](https://github.com/nextauthjs/next-auth).

## Overview


NextAuth.js is a complete open-source authentication solution.

This is an example application that shows how `next-auth` is applied to a basic Next.js app.

The deployed version can be found at [`https://next-auth-example-modal.vercel.app`]( https://next-auth-example-modal.vercel.app/)

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/evanmeeks/next-session-modal.git
cd next-session-modal
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 3. Configure Authentication Providers

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/guides/basics/deployment) or deploy the example instantly using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-auth-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/nextauthjs/next-auth-example&project-name=next-auth-example&repository-name=next-auth-example)

## Acknowledgements

<a href="https://vercel.com?utm_source=nextauthjs&utm_campaign=oss">
<img width="170px" src="https://raw.githubusercontent.com/nextauthjs/next-auth/main/docs/static/img/powered-by-vercel.svg" alt="Powered By Vercel" />
</a>
<p align="left">Thanks to Vercel sponsoring this project by allowing it to be deployed for free for the entire Auth.js Team</p>
