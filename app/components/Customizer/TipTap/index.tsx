import React, { useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
import { Icon } from '@iconify/react'

export default function Editor({
  content,
  onChange,
}: {
  content: string
  onChange: (html: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Text,
      Link.configure({
        openOnClick: false,
        autolink: true,
        // @ts-ignore
        defaultProtocol: 'https',
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  const setLink = useCallback(() => {
    // @ts-ignore
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url === '') {
      // @ts-ignore
      editor.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // @ts-ignore
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="editor p-4 mb-0 bg-white dark:bg-white rounded border border-gray-300">
      <div className="flex flex-row space-x-2 m-0">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Icon icon="material-symbols:format-bold" className="text-primary text-lg" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Icon icon="material-symbols:format-italic" className="text-primary text-lg" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <Icon icon="material-symbols:format-list-bulleted" className="text-primary text-lg" />
        </button>

        <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <Icon icon="ic:baseline-insert-link" className="text-primary text-lg" />
        </button>

        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          <Icon icon="ic:baseline-link-off" className="text-primary text-lg" />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[100px] m-0 p-0 prose !prose-p:m-0 !prose-p:p-0"
      />
    </div>
  )
}
