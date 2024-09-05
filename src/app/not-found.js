import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";
import RichTextDefault from "@/components/nestable/RichText";

export default async function NotFound() {
  const currentConfig = await StoryblokCMS.getConfig();

  const notFoundContent = currentConfig?.content?.not_found_content || {};

  const title = notFoundContent.title || "Page not found";
  const description =
    notFoundContent.description ||
    "Sorry, we couldn’t find the page you’re looking for.";
  const richText = notFoundContent.text || null;

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        {richText ? (
          <div className="mt-6 text-base leading-7 text-gray-600">
            <RichTextDefault blok={{ richtext: richText }} />
          </div>
        ) : (
          <p className="mt-6 text-base leading-7 text-gray-600">
            {description}
          </p>
        )}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Go back home
            </div>
          </Link>
          <Link href="/">
            <div className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
