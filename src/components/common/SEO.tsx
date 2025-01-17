import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
}

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords,
  noindex = false,
  nofollow = false,
  language = 'uk',
}: SEOProps) {
  const siteName = 'Baza Frontline';
  const defaultImage = '/logo.png'; // Add your default image path
  const siteUrl = 'https://baza-frontline.com'; // Replace with your actual domain

  const metaImage = image || defaultImage;
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <html lang={language} />
      <title>{`${title} | ${siteName}`}</title>
      <meta name='description' content={description} />
      {keywords && keywords.length > 0 && <meta name='keywords' content={keywords.join(', ')} />}
      <link rel='canonical' href={canonicalUrl} />
      {noindex && (
        <meta
          name='robots'
          content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`}
        />
      )}
      {/* OpenGraph tags */}
      <meta property='og:site_name' content={siteName} />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={metaImage} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:locale' content={language} />
      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property='article:published_time' content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property='article:modified_time' content={modifiedTime} />
      )}
      {type === 'article' && author && <meta property='article:author' content={author} />}
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@bazafrontline' /> {/* Replace with your Twitter handle */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={metaImage} />
      {/* Additional tags for better SEO */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      {author && <meta name='author' content={author} />}
    </Helmet>
  );
}
