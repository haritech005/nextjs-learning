import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const userParagraph: { [key: string]: string } = {
    "1": "We don't expect you to need to wrap most third-party components since it's likely you'll be using them within Client Components. However, one exception is providers, since they rely on React state and context, and are typically needed at the root of an",
    "2": "Context providers are typically rendered near the root of an application to share global concerns, like the current theme. Since React context is not supported in Server Components, tr",
    "3": "To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree.",
    "4": "For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an interactive search bar that uses state.",
  };
  const paragraph = userParagraph[id] || "No paragraph found for this user";

  return (
    <>
      <h1 className="bg-white text-blue-600">User {id}</h1>
      <p>{paragraph}</p>
    </>
  );
};

export default page;
