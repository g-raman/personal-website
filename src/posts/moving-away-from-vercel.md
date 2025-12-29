---
title: Moving away from Vercel 🍉
publishedAt: 2025-12-29
---

Vercel is probably the most recommended platform for deploying web apps online in the tech community.
It's for good reason; Vercel makes deployment _extremely_ easy.

You hardly need to know anything about build commands, CI/CD, and preview deployments.
You don't even have to think about the networking side of things,
nothing about SSL/TLS certificates, Firewalls, Domains, DNS, etc.

You push your code to GitHub, connect the repository on Vercel, click a couple of buttons and **BAM**, your project is live.

What Vercel has accomplished with Next.js and their suite of products has had a net positive impact on the web ecosystem.

Many people gained a passion for programming because they were able to effortlessly deploy their own projects online.

## The Issue

Honestly, Vercel still has great products, but the CEO, Guillermo Rauch, has expressed a position I disagree with.
Without getting into the details, there is a <a href="https://x.com/rauchg/status/1972669025525158031" target="_blank">controversial post</a>
he made on X, and it spurred a lot of drama.

I wanted to move away from the platform since then, but it's been a busy semester with my internship.
During my winter break, I finally had the time to learn more about alternatives. And during my research and migration,
Cloudflare proved to be an equally, if not more, capable platform.

## Next Steps

I'm going to write a separate guide on how to migrate from Vercel to Cloudflare and link it here once it's ready,
in case others want to do the same.

One of my other projects, <a href="https://uenroll.ca" target="_blank">uenroll</a>,
is still hosted on Vercel.
That's mostly because it's a Next.js project, and Vercel is still the best place to host Next.js projects.

So instead, I'm planning to migrate to [TanStack Start](https://tanstack.com/start/latest).
It's a new React meta-framework that looks like a promising alternative, and it already has a Next.js migration guide.
Once that's done, I'll move the app completely off of Vercel.

## Impact

My individual decision to move away from the platform is likely insignificant in the grand scheme of things.
From their perspective, it's a rounding error. But I'm hoping it encourages others to consider alternatives.

Vercel will likely continue to be a key player in the web ecosystem. Influencers will promote it as the default.
And Vercel will continue to innovate.

That's because the actual product is still good.

But sometimes it's hard to "separate the art from the artist"
