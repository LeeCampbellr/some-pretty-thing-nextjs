import React from "react"
import { gql } from "graphql-request"
import { request } from "@data/craft"

const Sitemap = () => {}

const getAllPosts = async () => {
  const ALL_POSTS_QUERY = gql`
    query AllPosts {
      entries(sectionId: 10, status: "Live") {
        slug
        dateUpdated
      }
    }
  `

  const data = await request({
    query: ALL_POSTS_QUERY,
  })

  const paths = data.entries.map((entry) => ({
    slug: entry.slug,
    updatedAt: entry.dateUpdated,
  }))

  return paths
}

const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = gql`
    query AllCategories {
      categories {
        slug
        dateUpdated
      }
    }
  `

  const data = await request({
    query: ALL_CATEGORIES_QUERY,
  })

  const paths = data.categories.map((category) => ({
    slug: category.slug,
    updatedAt: category.dateUpdated,
  }))

  return paths
}

const createSitemap = (
  posts,
  categories
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>https://someprettything.com/</loc>
            <priority>1</priority>
          </url>

           <url>
            <loc>https://someprettything.com/posts</loc>
            <priority>0.7</priority>
          </url>

           <url>
            <loc>https://someprettything.com/about</loc>
            <priority>0.7</priority>
          </url>

          <url>
            <loc>https://someprettything.com/about/faq</loc>
            <priority>0.7</priority>
          </url>

          <url>
            <loc>https://someprettything.com/about/press</loc>
            <priority>0.7</priority>
          </url>

          <url>
            <loc>https://someprettything.com/shop</loc>
            <priority>0.7</priority>
          </url>

          <url>
            <loc>https://someprettything.com/shop/in-my-wardrobe</loc>
            <priority>0.7</priority>
          </url>

          <url>
            <loc>https://someprettything.com/shop/home-essentials</loc>
            <priority>0.7</priority>
          </url>

          ${posts
            .map((post) => {
              return `
                <url>
                  <loc>${`https://someprettything.com/${post.slug}`}</loc>
                  <lastmod>${post.updatedAt}</lastmod>
                  <priority>0.7</priority>
                </url>
            `
            })
            .join("")}

            ${categories
              .map((category) => {
                return `
                <url>
                  <loc>${`https://someprettything.com/category/${category.slug}`}</loc>
                  <lastmod>${category.updatedAt}</lastmod>
                  <priority>0.5</priority>
                </url>
            `
              })
              .join("")}

    </urlset>
    `

export const getServerSideProps = async ({ res }) => {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  res.setHeader("Content-Type", "text/xml")
  res.write(createSitemap(posts, categories))
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
