import React from 'react'
import DocItem from '@theme-original/DocItem'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function DocItemWrapper(props) {
  const { colorMode } = useColorMode()

  return (
    <>
      <DocItem {...props} />
      {props.content.frontMatter.enable_comments && (
        <div className="row margin-top--lg">
          <div className="col col--9">
            <Giscus
              repo="blackmann/blackmann.github.io"
              repoId="R_kgDOHUh7MQ"
              category="General"
              categoryId="DIC_kwDOHUh7Mc4CPJVP"
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme={colorMode}
              lang="en"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  )
}
