import { defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
        defineField({ name: 'excerpt', type: 'text', rows: 3 }),
        defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'publishedAt', type: 'datetime' }),
        defineField({ name: 'category', type: 'string', options: { list: ['Backend', 'AI & ML', 'Frontend', 'DevOps', 'Career'] } }),
        defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }] }),
    ],
    preview: { select: { title: 'title', media: 'coverImage' } },
})
