export function getReadingTime(content: string): string {
  if (!content) return "1 min read";
  // Remove markdown headers, links, code blocks
  const clean = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#+\s/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_~`]/g, '');

  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
