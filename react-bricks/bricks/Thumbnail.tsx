import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return (
    <div className="my-6 mx-6 p-6 text-center w-1/3 border rounded-lg shadow-xl">
        <Image
            propName="image"
            alt="Fallback alt tag"
            maxWidth={200}
            imageClassName="mb-6"   
        />
        <Text 
            propName="title"
            renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
            placeholder="Type a title..."
        />

        <RichText
            propName="description"
            renderBlock={({ children }) => (
                <p className="text-lg text-gray-500">{children}</p>
            )}
            placeholder="Type a description"
            allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Highlight,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Code,
                types.RichTextFeatures.Link,
                types.RichTextFeatures.OrderedList,
                types.RichTextFeatures.UnorderedList
            ]}
            renderHighlight={({ children }) => (
                <span className="px-1 rounded bg-blue-200 text-blue-900">
                  {children}
                </span>
            )}
        />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({
    title: [
      {
        type: "paragraph",
        children: [
          {
            text: "Image goes here"
          }
        ]
      }
    ],
    description: [
      {
        type: "paragraph",
        children: [
          {
            text: "Lorem ipsum dolor sit amet."
          }
        ]
      }
    ],
    image: {
      src: "https://images.reactbricks.com/original/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a.jpg",
      placeholderSrc: "https://images.reactbricks.com/placeholder/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a.jpg",
      srcSet: "https://images.reactbricks.com/src_set/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a-300.jpg 300w,\nhttps://images.reactbricks.com/src_set/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a-200.jpg 200w,\nhttps://images.reactbricks.com/src_set/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a-100.jpg 100w,\nhttps://images.reactbricks.com/src_set/94d929ca-3a17-4e67-bd9b-5aeac7c46c5a-50.jpg 50w",
      width: 4800,
      height: 2700,
      alt: "unsplash img",
      seoName: ""
    }
  }),
  sideEditProps: [],
}

export default Thumbnail