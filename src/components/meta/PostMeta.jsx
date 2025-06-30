import { Helmet } from "react-helmet-async";

export default function PostMetadata({ title, description, image, slug }) {
  const safeTitle = title || "Blog";
  const safeDescription = description || "Contenido sobre tecnología, desarrollo y más.";
  const safeImage = image || "https://dominio.com/default-image.jpg";
  const url = `https://dominio.com/post/${slug || ""}`;

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={safeImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={safeImage} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}