import { localStore } from './localStore'

 export const PROJECTS = [
    {
      id: 0,
      title: 'Custom Daisy UI Themes',
      description:
        'make a few custom themes for daisyui. Like a flat gray / spacey theme, github dark, or some common IDE themes like nord, etc.',
      href: '#',
      tags: ['daisyui', 'tailwind', 'config', 'css']
    },
    {
      id: 1,
      title: 'Adoptable',
      description: 'Pet adoption platform for the Philippines.',
      href: '#',
      tags: ['blitzjs', 'nextjs', 'react', 'tailwind', 'daisyui', 'prisma', 'mysql', 'typescript']
    },
    {
      id: 2,
      title: 'Rust CLI',
      description: 'IDK. Some sort of CLI built in Rust.',
      href: '#',
      tags: ['rust', 'cli']
    },
    {
      id: 3,
      title: 'Solana Project',
      description: 'since i love Rust, do something with Solana blockchain.',
      href: '#',
      tags: ['rust', 'solana', 'blockchain']
    },
    {
      id: 4,
      title: 'Svelte Notion Markdown library',
      description: 'if there aren\'t any great svelte notion markdown libraries, i\'m making one.',
      href: '#',
      tags: ['svelte', 'library', 'typescript', 'notion']
    },
    {
      id: 5,
      title: 'Tauri Native Desktop App',
      description: 'some kind of trading tools for crypto with notifications.',
      href: '#',
        tags: ['tauri', 'native', 'desktop', 'crypto', 'rust']
    },
    {
      id: 6,
      title: 'Christy Vault Co., Inc.',
      description: 'Thinking of building out bytoddchristensen.com as a portfolio site for informational / dynamic websites to sell my services. For now I\'ll keep this here.',
      href: 'https://christyvault.com',
      tags: ['corporate', 'info site', 'react', 'nextjs', 'tailwind', 'typescript']
    }
  ]

export const theme = localStore('theme', 'black')
