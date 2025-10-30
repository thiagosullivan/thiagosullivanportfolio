import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

export const RichText = ({ ...props }) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="list">{children}</li>,
        p: ({ children }) => <p className="text-justify mb-2">{children}</p>,
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-emerald-500 transition-colors underline"
          >
            {children}
          </a>
        ),
        h4: ({ children }) => (
          <h4 className="font-bold mt-6 mb-2">{children}</h4>
        ),
      }}
    />
  );
};
