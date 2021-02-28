import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDesc: description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDesc, siteUrl, social },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDesc,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || '/'}`,
        twitter: social.twitter,
      };
      return (
        <Helmet title={seo.title}>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <link rel="canonical" href={siteUrl} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(article ? true : null) && (
            <meta property="og:type" content="article" />
          )}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.twitter && <meta name="twitter:creator" content={seo.twitter} />}
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && <meta name="twitter:image" content={seo.image} />}
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-128407903-1"
          ></script>
          <script>
            {`
          
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-128407903-1');
          
              `}
          </script>
        </Helmet>
      );
    }}
  />
);
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
SEO.defualtProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;
