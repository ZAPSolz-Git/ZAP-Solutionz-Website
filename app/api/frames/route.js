import cloudinary from '@/lib/cloudinary'
import { optimizeUrl } from '@/lib/cloudinary'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const folder = searchParams.get('folder')

  if (!folder) {
    return Response.json({ error: 'folder param required' }, { status: 400 })
  }

  const result = await cloudinary.api.resources({
    type: 'upload',
    prefix: `zapsolution/${folder}/`,
    max_results: 400,
  })

  const urls = result.resources
    .sort((a, b) => a.public_id.localeCompare(b.public_id))
    .map((r) => optimizeUrl(r.secure_url))

  return Response.json({ urls })
}