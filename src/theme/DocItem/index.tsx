import React, {ComponentProps} from 'react';
import type DocItemType from '@theme/DocItem';
import DocItem from '@theme-original/DocItem';

type Props = ComponentProps<typeof DocItemType>

export default function DocItemWrapper(props: Props): JSX.Element {
  const {content: DocContent} = props;
  const {frontMatter} = DocContent;

  console.log(frontMatter)
  return (
    <>
      <DocItem {...props} />
    </>
  );
}
