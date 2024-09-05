import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from "./RichText";

const Article = ({ blok }) => {
  const articleBlocks = blok.article;

  const subtitleBlocks = articleBlocks.filter(block => block.component === 'sub_title');
  const contentBlocks = articleBlocks.filter(block => block.component === 'content');
  const summaryBlock = articleBlocks.find(block => block.component === 'summary');
  const titleBlock = articleBlocks.find(block => block.component === 'title');

  const title = titleBlock ? titleBlock.title : "No title available";
  const summary = summaryBlock ? summaryBlock.summary : "No summary available";

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex items-center flex-col bg-[#212a43] py-20"
    >
      <div className="text-left w-[700px]">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white">
          {title}
        </h2>

        <p className="mb-4 text-xl font-extrabold leading-tight text-gray-400">
          {summary}
        </p>

        {subtitleBlocks.map((subtitleBlock, index) => (
          <div key={subtitleBlock._uid}>
            <h3 className="mb-4 text-2xl font-extrabold leading-tight text-white">
              {subtitleBlock.sub_title}
            </h3>

            {contentBlocks[index] && (
              <div className="mb-4 text-lg font-extrabold leading-tight text-gray-400">
                <RichTextDefault blok={{ richtext: contentBlocks[index].content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
