'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Sparkles, 
  Brain, 
  AlertCircle, 
  HelpCircle,
  TrendingUp,
  Dumbbell
} from 'lucide-react'

interface ArticleRendererProps {
  content: string
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  // Split content by paragraphs/blocks
  const blocks = React.useMemo(() => {
    const rawBlocks = content.split(/\r?\n\r?\n/)
    const parsedBlocks: any[] = []
    
    let inTable = false
    let tableRows: string[] = []

    rawBlocks.forEach((block) => {
      const trimmedBlock = block.trim()
      if (!trimmedBlock) return

      // Handle table accumulation
      if (trimmedBlock.startsWith('|')) {
        inTable = true
        tableRows.push(...trimmedBlock.split(/\r?\n/))
        return
      } else if (inTable) {
        // We were in a table, but this block is not a table anymore. Flush table!
        parsedBlocks.push({ type: 'table', rows: [...tableRows] })
        tableRows = []
        inTable = false
      }

      // 1. Heading 1
      if (trimmedBlock.startsWith('# ')) {
        parsedBlocks.push({ type: 'h1', text: trimmedBlock.replace('# ', '') })
      }
      // 2. Heading 2
      else if (trimmedBlock.startsWith('## ')) {
        parsedBlocks.push({ type: 'h2', text: trimmedBlock.replace('## ', '') })
      }
      // 3. Heading 3
      else if (trimmedBlock.startsWith('### ')) {
        parsedBlocks.push({ type: 'h3', text: trimmedBlock.replace('### ', '') })
      }
      // 4. Alert / Blockquote
      else if (trimmedBlock.startsWith('> ')) {
        const lines = trimmedBlock.split(/\r?\n/).map(line => line.replace(/^>\s?/, ''))
        const firstLine = lines[0] || ''
        
        let alertType: 'note' | 'tip' | 'important' | 'warning' = 'note'
        let cleanLines = [...lines]
        
        if (firstLine.includes('[!NOTE]')) {
          alertType = 'note'
          cleanLines.shift()
        } else if (firstLine.includes('[!TIP]')) {
          alertType = 'tip'
          cleanLines.shift()
        } else if (firstLine.includes('[!IMPORTANT]')) {
          alertType = 'important'
          cleanLines.shift()
        } else if (firstLine.includes('[!WARNING]')) {
          alertType = 'warning'
          cleanLines.shift()
        }
        
        parsedBlocks.push({ 
          type: 'alert', 
          alertType, 
          text: cleanLines.join('\n').trim() 
        })
      }
      // 5. Mathematical Equation Block
      else if (trimmedBlock.startsWith('$$') && trimmedBlock.endsWith('$$')) {
        parsedBlocks.push({ 
          type: 'equation', 
          text: trimmedBlock.slice(2, -2).trim() 
        })
      }
      // 6. Bullet Lists
      else if (trimmedBlock.startsWith('- ') || trimmedBlock.startsWith('* ')) {
        const listItems = trimmedBlock.split(/\r?\n/).map(item => item.replace(/^[-\*]\s?/, ''))
        parsedBlocks.push({ type: 'list', items: listItems })
      }
      // 7. Standard Paragraph
      else {
        parsedBlocks.push({ type: 'p', text: trimmedBlock })
      }
    })

    // If still in table at end of content, flush it
    if (inTable && tableRows.length > 0) {
      parsedBlocks.push({ type: 'table', rows: [...tableRows] })
    }

    return parsedBlocks
  }, [content])

  // Helper to parse inline bolding and standard anchor links
  const renderInlineText = (text: string) => {
    // 1. Parse bold: **text**
    const parts = text.split(/(\*\*.*?\*\*)/)
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const cleanBoldText = part.slice(2, -2)
        return (
          <strong key={index} className="font-extrabold text-white text-shadow-sm">
            {renderInlineLinks(cleanBoldText)}
          </strong>
        )
      }
      return <span key={index}>{renderInlineLinks(part)}</span>
    })
  }

  // Helper to parse inline links: [label](url)
  const renderInlineLinks = (text: string) => {
    const linkRegex = /(\[.*?\]\(.*?\))/
    const parts = text.split(linkRegex)

    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/)
      if (match) {
        const label = match[1]
        const url = match[2]
        
        // Handle internal vs external routing
        const isExternal = url.startsWith('http') || url.startsWith('www')
        if (isExternal) {
          return (
            <a 
              key={index} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-300 transition-colors"
            >
              {label}
            </a>
          )
        } else {
          return (
            <Link 
              key={index} 
              href={url} 
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-300 transition-colors"
            >
              {label}
            </Link>
          )
        }
      }
      return part
    })
  }

  return (
    <div className="space-y-8 text-zinc-300 leading-relaxed font-light text-sm md:text-base columns-1">
      {blocks.map((block, idx) => {
        switch (block.type) {
          
          case 'h1':
            return (
              <h1 
                key={idx} 
                className="text-2xl md:text-4xl font-black text-white pt-10 pb-4 tracking-tight border-b border-zinc-900 flex items-center gap-3"
              >
                <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
                {renderInlineText(block.text)}
              </h1>
            )

          case 'h2':
            return (
              <h2 
                key={idx} 
                className="text-xl md:text-2xl font-bold text-white pt-8 pb-2 tracking-tight border-l-4 border-blue-900 pl-4 flex items-center gap-2"
              >
                {renderInlineText(block.text)}
              </h2>
            )

          case 'h3':
            return (
              <h3 
                key={idx} 
                className="text-base md:text-lg font-bold text-blue-200 pt-6 flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-blue-500" />
                {renderInlineText(block.text)}
              </h3>
            )

          case 'p':
            return (
              <p key={idx} className="leading-loose text-zinc-300 md:text-[15px]">
                {renderInlineText(block.text)}
              </p>
            )

          case 'list':
            return (
              <ul key={idx} className="space-y-3.5 pl-1.5 my-6">
                {block.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-950/50 border border-blue-900/40 text-blue-400 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-zinc-300 text-sm md:text-[15px] leading-relaxed">
                      {renderInlineText(item)}
                    </span>
                  </li>
                ))}
              </ul>
            )

          case 'alert': {
            let config = {
              styles: 'border-blue-900/40 bg-blue-950/10 text-blue-300',
              icon: HelpCircle,
              title: '補足解説'
            }
            if (block.alertType === 'tip') {
              config = {
                styles: 'border-emerald-900/40 bg-emerald-950/10 text-emerald-300',
                icon: Sparkles,
                title: '実践アドバイス'
              }
            } else if (block.alertType === 'important') {
              config = {
                styles: 'border-purple-900/40 bg-purple-950/10 text-purple-300',
                icon: Brain,
                title: '重要講義'
              }
            } else if (block.alertType === 'warning') {
              config = {
                styles: 'border-red-950/40 bg-red-950/15 text-red-400',
                icon: AlertCircle,
                title: '怪我防止・警告'
              }
            }
            const Icon = config.icon
            return (
              <div 
                key={idx} 
                className={`my-8 p-5 rounded-xl border backdrop-blur-xl ${config.styles} flex gap-4 items-start shadow-xl shadow-black/10`}
              >
                <div className="p-2 rounded bg-zinc-950 border border-zinc-900 shrink-0">
                  <Icon className="w-5 h-5 text-current" />
                </div>
                <div>
                  <h5 className="text-xs font-extrabold tracking-widest uppercase mb-1.5 opacity-90">{config.title}</h5>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-300 font-light whitespace-pre-line">
                    {renderInlineText(block.text)}
                  </p>
                </div>
              </div>
            )
          }

          case 'equation':
            return (
              <div 
                key={idx} 
                className="my-8 p-6 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center text-center shadow-inner"
              >
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-3">
                  <Dumbbell className="w-3.5 h-3.5 inline mr-1 text-blue-500" /> Equation / 力学方程式
                </span>
                <div className="text-base md:text-xl font-bold tracking-widest text-white py-2 px-6 bg-zinc-900/50 border border-zinc-850 rounded-lg max-w-full overflow-x-auto whitespace-nowrap">
                  {block.text}
                </div>
              </div>
            )

          case 'table': {
            // Simple robust Table Parsing
            const rows = block.rows.filter((r: string) => r.trim() !== '')
            if (rows.length < 2) return null
            
            // Extract headers
            const headers = rows[0].split('|').map((h: string) => h.trim()).filter(Boolean)
            
            // Extract data rows (skip headers and separator row e.g., | :--- | :--- |)
            const dataRows = rows.slice(2).map((row: string) => {
              return row.split('|').map((c: string) => c.trim()).filter(Boolean)
            })

            return (
              <div key={idx} className="my-8 overflow-x-auto border border-zinc-900 rounded-xl shadow-lg shadow-black/30">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-950 border-b border-zinc-900 text-xs font-extrabold tracking-wider text-zinc-400">
                      {headers.map((header: string, i: number) => (
                        <th key={i} className="px-5 py-4 uppercase">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm font-light leading-relaxed">
                    {dataRows.map((rowArr: string[], rIdx: number) => (
                      <tr 
                        key={rIdx} 
                        className={`border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors ${
                          rIdx % 2 === 0 ? 'bg-zinc-900/10' : 'bg-transparent'
                        }`}
                      >
                        {rowArr.map((cell: string, cIdx: number) => (
                          <td key={cIdx} className="px-5 py-4 text-zinc-300 font-light">
                            {renderInlineText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }

          default:
            return null
        }
      })}
    </div>
  )
}
