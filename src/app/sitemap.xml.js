export default async function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
  ];
}
console.log(process.env.NEXT_PUBLIC_SITE_URL);
