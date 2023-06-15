# this README.md needs an update with using version 4.11.1

# remAid Content Management System

The remAid Content Management System (CMS) is built with an open-source headless CMS called Strapi.
Strapi allows you to quickly build APIs through which complex datastructure can be achieved by providing a simple and
easy to use interface for non-techies. The benefit of using a headless CMS compared to a classic CMS like Wordpress is
that you can stay in full control over the visual appearance of your website and build a custom site with modern
frameworks like Vue, React, Svelte etc. while still having a simple way to change the data which makes up the site.
Traditionally you would have to create custom themes for Wordpress and bend them to make them do what you want, which is
very inefficient and inflexible.

## Notes about Version

![Strapi Version](https://img.shields.io/badge/strapi-4.11.1-lightgreen)

We are currently using [Strapi v3](https://docs-v3.strapi.io/) since not a lot of work was done on the CMS since it's
original creation. If at some
point more work needs to be done on the CMS an upgrade to [Strapi v4](https://strapi.io/v4) would be a good starting
point. Many good and useful
features like better error handling, smarter ways to fetch the data, pagination and better filtering formats could prove
to be very useful for further development and usage.

## Where to start?

A good place to start is to read
the [ Strapi Developer Docs](https://docs-v4.strapi.io/developer-docs/latest/getting-started/introduction.html)
which explain all the functionality and customization options fairly well. If you just want to use the CMS however it
should be fairly straight forward and self-explanatory although you can still take a look at
the [Strapi User Guide](https://docs-v3.strapi.io/user-docs/latest/getting-started/introduction.html#accessing-the-admin-panel)
.

## Customizations

All in all we are using pretty much vanilla Strapi apart from the customized Logo and the usage of
the [Slugify Package](https://www.npmjs.com/package/slugify).
This allows us to quickly create slugified strings of the User Guide Titles. You can find the corresponding file
under `/api/guides/models/guides.js`.

## Deployment

The CMS is currently hosted on [render.com](render.com) as a simple Web Service. To create the service with a disk space
for the database we are using Blueprints which need a render.yaml file at the root of the directory. To find out how to
use these files check out the [Render Docs](https://render.com/docs/blueprint-spec).

