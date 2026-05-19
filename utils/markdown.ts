import fs from 'fs'
import path from 'path'

export interface ArticleMetadata {
  title: string
  description: string
  category: string
  keywords: string[]
}

export interface ArticleData {
  metadata: ArticleMetadata
  content: string
  slug: string
  type: string
}

export function getArticle(type: 'region' | 'exercise' | 'goal', slug: string): ArticleData | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'bodymake', type, `${slug}.md`)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null
    }

    const rawFileContent = fs.readFileSync(filePath, 'utf-8')

    // Parse frontmatter (YAML block surrounded by ---)
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/
    const match = rawFileContent.match(frontmatterRegex)

    let metadataStr = ''
    let bodyContent = rawFileContent

    if (match) {
      metadataStr = match[1]
      bodyContent = match[2]
    }

    // Default metadata values
    const metadata: ArticleMetadata = {
      title: slug.toUpperCase(),
      description: '',
      category: type === 'region' ? '部位別' : type === 'exercise' ? '種目別' : '目的別',
      keywords: []
    }

    // Simple line-by-line parsing of frontmatter YAML
    if (metadataStr) {
      metadataStr.split(/\r?\n/).forEach(line => {
        const colonIndex = line.indexOf(':')
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim()
          const val = line.slice(colonIndex + 1).trim()
          
          if (key === 'title') metadata.title = val
          else if (key === 'description') metadata.description = val
          else if (key === 'category') metadata.category = val
          else if (key === 'keywords') {
            metadata.keywords = val.split(',').map(k => k.trim()).filter(Boolean)
          }
        }
      })
    }

    return {
      metadata,
      content: bodyContent.trim(),
      slug,
      type
    }
  } catch (error) {
    console.error(`Error loading markdown file [${type}/${slug}]:`, error)
    return null
  }
}

/**
 * Retrieve a list of all available slugs for static site pre-rendering.
 */
export function getAllSlugs(type: 'region' | 'exercise' | 'goal'): string[] {
  try {
    const dirPath = path.join(process.cwd(), 'content', 'bodymake', type)
    if (!fs.existsSync(dirPath)) {
      return []
    }
    
    const files = fs.readdirSync(dirPath)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''))
  } catch (error) {
    console.error(`Error listing slugs for type [${type}]:`, error)
    return []
  }
}
