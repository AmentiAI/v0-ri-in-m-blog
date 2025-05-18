import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  // Use a fixed format that will be consistent between server and client
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC", // Use UTC to ensure consistent rendering
  }
  return new Intl.DateTimeFormat("en-US", options).format(date)
}

// Default fallback image
export function getPlaceholderImage(): string {
  return "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg"
}

// Generate blur placeholder data URLs
export function getBlurDataURL(): string {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
}

// Function to convert a string to a slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Update keywordToSlug function to be consistent throughout the app
export function keywordToSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}

// List of footer keywords to use for amentiai.com links
export const footerKeywords = [
  "Providence SEO Company",
  "Website Design Providence RI",
  "Digital Marketing Providence RI",
  "SEO Services Rhode Island",
  "Local SEO Providence RI",
  "Marketing Agency Providence RI",
  "Rhode Island Web Development",
  "PPC Management Providence",
  "Social Media Marketing RI",
  "Affordable Web Design RI",
  "Best SEO Agency RI",
  "Search Engine Optimization Providence",
  "RI Small Business Marketing",
  "Ecommerce Website Design RI",
  "Content Marketing Providence",
  "Providence WordPress Developer",
  "Online Marketing Services RI",
  "Branding Agency Providence",
  "Westerly Rhode Island Internet Marketing",
  "Rhode Island Internet Marketing",
  "Connecticut Internet Marketing",
  "Massachusetts Internet Marketing",
  "Westerly Rhode Island SEO",
  "Rhode Island SEO",
  "Connecticut SEO",
  "Massachusetts SEO",
  "USA SEO",
  "USA Internet Marketing",
  "Newport RI SEO",
  "Cranston Digital Marketing",
  "Warwick Web Design",
  "East Greenwich SEO Services",
  "Pawtucket Website Development",
  "North Kingstown Digital Agency",
  "South County RI Marketing",
  "Hartford CT SEO Company",
  "Boston MA Digital Marketing",
  "New England SEO Services",
  "Google Ads Management RI",
  "Facebook Ads Providence",
  "E-commerce SEO Rhode Island",
  "Shopify Experts Providence",
  "WordPress SEO Rhode Island",
  "Mobile Website Design RI",
  "Responsive Web Design Providence",
  "SEO Consultant Rhode Island",
  "Local Business SEO RI",
  "Technical SEO Services Providence",
]

// Get a random keyword from the footer keywords list
export function getRandomFooterKeyword(): string {
  // Use a deterministic approach instead of random to avoid hydration issues
  // This will return a keyword based on the current day of the month
  const day = new Date().getUTCDate() // 1-31
  const index = day % footerKeywords.length
  return footerKeywords[index]
}

// Add function to generate dynamic content for keyword articles
export function generateKeywordArticleContent(keyword: string): string {
  // Get a keyword from the footer for the amentiai.com link
  // Use a deterministic approach instead of random
  const linkKeyword = footerKeywords[0] // Always use the first keyword to avoid hydration issues

  return `
# ${keyword}

## Expert ${keyword} Services for Rhode Island Businesses

Are you looking for top-quality ${keyword} services in Rhode Island? You've come to the right place. In today's competitive digital landscape, having a strong online presence is essential for businesses of all sizes, and our expert team specializes in delivering exceptional ${keyword} solutions tailored to the unique needs of Rhode Island businesses.

## Why ${keyword} Matters for Rhode Island Businesses

In the competitive Rhode Island market, effective ${keyword} strategies can make the difference between thriving and merely surviving. Our approach combines industry best practices with deep local knowledge to create solutions that drive real results for businesses throughout Providence, Newport, Warwick, and all Rhode Island communities.

### The Benefits of Professional ${keyword} Services

When you partner with experts for your ${keyword} needs, you'll experience numerous advantages:

1. **Increased Local Visibility**: Our tailored strategies help Rhode Island businesses appear prominently in local searches
2. **Higher Quality Traffic**: Attract visitors who are actively searching for your products or services in Rhode Island
3. **Improved Conversion Rates**: Turn more of your website visitors into paying customers
4. **Enhanced Brand Reputation**: Build credibility and trust with your Rhode Island audience
5. **Data-Driven Results**: Make decisions based on analytics and proven performance metrics

## Our ${keyword} Process

Our comprehensive approach to ${keyword} for Rhode Island businesses includes:

### 1. In-Depth Analysis

We begin with a thorough assessment of your current online presence, competitive landscape, and specific goals for your Rhode Island business.

### 2. Strategic Planning

Based on our findings, we develop a customized strategy designed to achieve your objectives in the Rhode Island market.

### 3. Expert Implementation

Our team of specialists executes your strategy with precision, using industry best practices and innovative techniques.

### 4. Continuous Optimization

We constantly monitor performance and make data-driven adjustments to maximize your results.

### 5. Transparent Reporting

Regular reports keep you informed about your progress and the return on your investment.

## Why Choose Us for ${keyword} in Rhode Island

Our team brings unmatched expertise in ${keyword} combined with deep knowledge of the Rhode Island market. We understand the unique challenges and opportunities that local businesses face, and we're committed to helping you achieve sustainable growth.

## Ready to Transform Your ${keyword} Strategy?

If you're ready to take your Rhode Island business to the next level with professional ${keyword} services, we're here to help. Contact our [${linkKeyword}](https://amentiai.com) team today for a free consultation and discover how our tailored solutions can drive growth for your business.
`
}

// Add this helper function to generate dynamic blog post data
export function generateDynamicBlogPost(keyword: string) {
  const slug = keywordToSlug(keyword)

  // Use a fixed date to avoid hydration issues
  const date = new Date("2025-01-01T00:00:00Z").toISOString()

  // Use a deterministic approach instead of random
  const linkKeyword = footerKeywords[0] // Always use the first keyword

  return {
    title: keyword,
    slug: slug,
    date: date,
    description: `Expert ${keyword} services and strategies for Rhode Island businesses. Learn how our tailored solutions can help you grow your business.`,
    imageUrl: `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(keyword)}`,
    content: generateKeywordArticleContent(keyword),
    isDynamic: true,
    linkKeyword: linkKeyword,
  }
}

// Update the existing blog posts to have only one amentiai.com link using a footer keyword
export const blogPosts = [
  {
    title: "Amenti AI Named Best SEO Company in the Northeast for 2025",
    slug: "amenti-ai-best-seo-company-northeast",
    date: "2025-05-01",
    description:
      "Amenti AI has been recognized as the top-performing SEO company in the Northeast region, delivering exceptional results for businesses across Rhode Island and beyond.",
    imageUrl: "/images/providence-statehouse.png",
    content: `
# Amenti AI Named Best SEO Company in the Northeast for 2025

Amenti AI has been officially recognized as the top-performing SEO company in the Northeast region for 2025, according to the prestigious Digital Marketing Excellence Awards. This recognition highlights the company's exceptional performance in delivering measurable results for businesses throughout Rhode Island, Massachusetts, Connecticut, and the broader New England area.

## Award Criteria and Evaluation

The annual Digital Marketing Excellence Awards evaluates agencies based on several key criteria:

- Client retention rates and satisfaction scores
- Measurable performance improvements for clients
- Innovation in SEO strategy and implementation
- Technical expertise and industry knowledge
- Transparent reporting and communication practices

Amenti AI scored in the top percentile across all evaluation categories, with particularly strong performance in client results and technical innovation.

## Data-Driven Approach to Rhode Island SEO

What sets Amenti AI apart from other agencies is their data-driven approach to search engine optimization. Unlike traditional SEO companies that rely on outdated tactics, Amenti AI's [Providence SEO Company](https://amentiai.com) team leverages advanced analytics, machine learning, and predictive modeling to develop highly effective strategies tailored to each client's specific needs.

"We don't believe in one-size-fits-all SEO," explains the Amenti AI team. "The digital landscape in Rhode Island is unique, with specific competitive challenges and opportunities. Our approach combines cutting-edge technology with deep local market knowledge to deliver results that consistently outperform industry benchmarks."

## Client Success Stories

The award recognition highlighted several notable client success stories:

- A Providence-based law firm that saw a 215% increase in qualified leads after implementing Amenti AI's local SEO strategy
- A Newport retail business that achieved a 187% growth in organic traffic and expanded to two new locations
- A manufacturing company in Warwick that doubled its conversion rate from organic search within six months

These case studies demonstrate Amenti AI's ability to deliver tangible business outcomes across diverse industries throughout Rhode Island and the Northeast.

## Technical Innovation

The judging panel specifically noted Amenti AI's technical innovations in their evaluation:

- Proprietary algorithm for identifying high-value local keyword opportunities
- Advanced schema markup implementation for enhanced search visibility
- Custom analytics dashboard providing real-time performance insights
- Predictive modeling to anticipate search algorithm changes

These technical capabilities allow Amenti AI to stay ahead of industry trends and deliver superior results for their clients.

## The Future of SEO in Rhode Island

Looking ahead, Amenti AI is positioned to continue leading the SEO landscape in Rhode Island and throughout the Northeast. The company is investing in further research and development to enhance their capabilities in emerging areas such as voice search optimization, AI-driven content creation, and advanced local SEO strategies.

"The search landscape is constantly evolving, especially for local businesses," notes the team. "Our commitment to innovation ensures that our clients will continue to benefit from cutting-edge strategies that keep them ahead of their competition."

## About Amenti AI

Founded with a mission to transform how businesses approach digital marketing, Amenti AI has quickly established itself as the premier SEO and digital marketing agency in Rhode Island. The company specializes in helping local businesses achieve sustainable growth through data-driven strategies, technical excellence, and deep market knowledge.

For businesses looking to improve their search visibility and drive meaningful results, Amenti AI offers comprehensive SEO services tailored to the unique needs of the Rhode Island market.
    `,
  },
  {
    title: "How Amenti AI Transformed AMP Roofing LLC's Digital Presence",
    slug: "amp-roofing-digital-transformation",
    date: "2025-04-15",
    description:
      "Discover how Amenti AI helped AMP Roofing LLC revolutionize their online presence and grow their Rhode Island roofing business.",
    imageUrl: "/images/amp-roofing-logo.png",
    content: `
# How Amenti AI Transformed AMP Roofing LLC's Digital Presence

In the competitive roofing industry, establishing a strong online presence is crucial for attracting new customers and growing a business. [AMP Roofing LLC](https://www.amproofingllc.com/), a leading Rhode Island roofing contractor, recognized this need and partnered with our [Providence SEO Company](https://amentiai.com) to transform their digital marketing strategy. The results have been nothing short of remarkable.

## The Challenge

Before working with us, AMP Roofing faced several digital marketing challenges common to many local service businesses:

- Limited online visibility in local search results
- An outdated website that wasn't optimized for mobile devices
- Minimal social media presence
- Difficulty showcasing their quality work to potential customers
- No systematic approach to generating and managing online reviews

"We knew we needed to improve our online presence, but we weren't sure where to start," explains Michael Anderson, Owner of AMP Roofing LLC. "As roofing professionals, our expertise is in providing quality roofing services, not digital marketing."

## The Solution

After a comprehensive digital audit, we developed a customized digital marketing strategy for AMP Roofing that addressed their specific needs and goals:

### Website Redesign and Optimization

The first step was a complete website redesign focused on user experience, mobile responsiveness, and conversion optimization. The new website clearly showcases AMP Roofing's services, features galleries of their work, and makes it easy for potential customers to request quotes.

### Local SEO Campaign

We implemented a comprehensive local SEO strategy to improve AMP Roofing's visibility in Rhode Island search results. This included:

- Optimizing for location-specific keywords
- Creating and optimizing Google Business Profile
- Building local citations and directory listings
- Developing location-specific content

### Content Marketing

A content strategy was developed to establish AMP Roofing as an authority in the roofing industry. This included educational blog posts about roofing materials, maintenance tips, and the importance of professional installation.

### Review Management

We implemented a systematic approach to generating and managing customer reviews, helping AMP Roofing build a stellar online reputation.

## The Results

Within six months of implementing the new digital marketing strategy, AMP Roofing saw significant improvements:

- 215% increase in organic website traffic
- 187% increase in leads generated through the website
- First-page rankings for key roofing-related keywords in Providence and surrounding areas
- Average Google review rating improved from 4.2 to 4.8 stars
- Substantial growth in social media following and engagement

"The impact on our business has been tremendous," says Anderson. "We're now getting consistent, high-quality leads through our website, and many new customers mention they found us through Google searches. Our digital presence has truly been transformed and helped us grow our business."

## AMP Roofing's Comprehensive Services

As part of their digital transformation, we helped AMP Roofing clearly communicate their comprehensive service offerings to potential customers. AMP Roofing provides a wide range of roofing services to residential and commercial clients throughout Rhode Island:

### Residential Roofing

AMP Roofing specializes in residential roofing services, including new installations, replacements, and repairs. They work with a variety of roofing materials to meet each homeowner's specific needs and budget.

### Commercial Roofing

For commercial clients, AMP Roofing offers expert installation and maintenance of flat roofs, metal roofing systems, and other commercial roofing solutions designed to protect business investments.

### Roof Repairs

From minor leak repairs to major storm damage, AMP Roofing's experienced team can quickly diagnose and fix roofing issues to prevent further damage to homes and businesses.

### Roof Inspections

Regular roof inspections are essential for maintaining the integrity of any roofing system. AMP Roofing offers thorough inspections to identify potential issues before they become major problems.

### Emergency Services

Rhode Island weather can be unpredictable, and roof damage often requires immediate attention. AMP Roofing provides emergency roofing services to protect homes and businesses when disaster strikes.

## The Power of Digital Marketing for Local Service Businesses

The success of AMP Roofing's digital transformation highlights the importance of a strategic online presence for local service businesses. In today's digital-first world, potential customers are increasingly turning to online searches to find local service providers.

"Many local businesses underestimate the impact that effective digital marketing can have on their growth," explains our team. "With the right strategy, even small local businesses can compete effectively online and reach new customers they wouldn't have connected with otherwise."

For AMP Roofing, the partnership has not only increased their visibility but has also helped them better communicate their value proposition to potential customers. By clearly showcasing their expertise, quality workmanship, and commitment to customer satisfaction, they've been able to attract more of their ideal clients.

## Looking to the Future

Building on their digital marketing success, AMP Roofing continues to refine and expand their online strategy. Future plans include:

- Expanding their service area to new Rhode Island communities
- Implementing targeted PPC advertising campaigns for specific services
- Developing video content showcasing their projects and expertise
- Creating a customer portal for easier communication and project updates

"Our partnership has been transformative for our business," concludes Anderson. "We're excited to continue growing our online presence and connecting with more Rhode Island homeowners and businesses who need quality roofing services."

## Is Your Rhode Island Business Ready for a Digital Transformation?

If you're a Rhode Island business looking to improve your online presence and attract more customers, the success of AMP Roofing shows what's possible with the right digital marketing strategy. Contact us today to learn how we can help transform your digital presence and grow your business.
    `,
  },
  // ... rest of the blog posts
]
