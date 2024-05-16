import { FC } from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
};
const titleDefault = "frontendaese";
const descriptionDefault =
  "frontendaese is my VSCode-inspired portfolio, designed to act like an integrated development environment (IDE), especially VSCode.";
const SEO: FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title || titleDefault}</title>
      <meta name="description" content={description || descriptionDefault} />
      {/* End standard metadata tags */}
    </Helmet>
  );
};
export default SEO;
