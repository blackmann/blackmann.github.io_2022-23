import React from 'react';
import DocCard from '@theme/DocCard';
import {findFirstCategoryLink} from '@docusaurus/theme-common';

// Filter categories that don't have a link.
function filterItems(items) {
  return items.filter((item) => {
    if (item.type === 'category') {
      return !!findFirstCategoryLink(item);
    }

    return true;
  });
}

export default function DocCardList({items, className}) {
  return (
    <ul className={className}>
      {filterItems(items).map((item, index) => (
        <li key={index}>
          <DocCard key={index} item={item} />
        </li>
      ))}
    </ul>
  );
}
