export function transformStratipResToLink(link) {
  return {
    featuredimg: link?.attributes?.featuredimg?.data?.attributes?.url,
    name: link?.attributes?.name,
    createAt: link?.attributes?.createdAt,
    updateAt: link?.attributes?.updatedAt,
    url: link?.attributes?.url,
    slug: link?.attributes?.slug,
    body: link?.attributes?.body,
    tag: link?.attributes?.tag,
    userid: link?.attributes?.userid,
    user: link?.attributes?.user,
    id: link?.id,
    links: link?.links,
    meta: link?.meta,
    type: link?.type,
  };
}
