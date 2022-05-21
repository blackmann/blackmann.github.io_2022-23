import React from 'react'
import clsx from 'clsx'
import Translate, { translate } from '@docusaurus/Translate'
import Link from '@docusaurus/Link'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import { usePluralForm } from '@docusaurus/theme-common'
import { blogPostContainerID } from '@docusaurus/utils-common'
import MDXContent from '@theme/MDXContent'
import EditThisPage from '@theme/EditThisPage'
import styles from './styles.module.css'
import TagsListInline from '@theme/TagsListInline'
import BlogPostAuthors from '@theme/BlogPostAuthors' // Very simple pluralization: probably good enough for now

function useReadingTimePlural() {
  const { selectMessage } = usePluralForm()
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat)
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {
          readingTime,
        }
      )
    )
  }
}

export default function BlogPostItem(props) {
  const readingTimePlural = useReadingTimePlural()
  const { withBaseUrl } = useBaseUrlUtils()
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata
  const image = assets.image ?? frontMatter.image
  const truncatedPost = !isBlogPostPage && truncated
  const tagsExists = tags.length > 0
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2'
  return (
    <article
      className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <TitleHeading
          className={
            isBlogPostPage ? styles.blogPostTitle : styles.blogPostHeadline
          }
          itemProp="headline"
        >
          {isBlogPostPage ? (
            title
          ) : (
            <Link itemProp="url" to={permalink}>
              {title}
            </Link>
          )}
        </TitleHeading>
        <div
          className={clsx(styles.blogPostData, {
            'margin-vert--md': isBlogPostPage,
          })}
        >
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {typeof readingTime !== 'undefined' && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}
            </>
          )}
        </div>
        <BlogPostAuthors authors={authors} assets={assets} />
      </header>

      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, {
            absolute: true,
          })}
        />
      )}

      <div // This ID is used for the feed generation to locate the main content
        id={isBlogPostPage ? blogPostContainerID : undefined}
        className={clsx('markdown', {'margin-vert--md': !isBlogPostPage})}
        itemProp="articleBody"
      >
        <MDXContent>{children}</MDXContent>
      </div>

      {(tagsExists || truncated) && (
        <footer
          className={clsx(
            'row docusaurus-mt-lg',
            isBlogPostPage && styles.blogPostDetailsFull
          )}
        >
          {tagsExists && (
            <div
              className={clsx('col', {
                'col--9': truncatedPost,
              })}
            >
              <TagsListInline tags={tags} />
            </div>
          )}

          {isBlogPostPage && editUrl && (
            <div className="col margin-top--sm">
              <EditThisPage editUrl={editUrl} />
            </div>
          )}
        </footer>
      )}
    </article>
  )
}
