import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import nendy from "./../public/images/c/nendy.jpg"

const Contact = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  const { contact_form_action } = config.params;
  return (
    <section className="section pt-[72px]">
      <div className="container">
        <p>
          Designed and built by 
          <span className="inline-flex items-baseline">
            <img src="./../public/images/c/nendy.jpg" alt="" className="self-center w-5 h-5 rounded-full mx-1" />
            <span>Nendy Azhad Nurahman</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
