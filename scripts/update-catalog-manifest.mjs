import { createHash } from 'node:crypto'
import { readFile, readdir, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const read = path => readFile(new URL(path, root))
const json = async path => JSON.parse(await read(path))

const [characters, preview, manager] = await Promise.all([
  json('characters.json'), json('modpreview.json'), json('modmanager.json'),
])
if (!preview.gameVersion || !preview.catalogVersion || !characters.version ||
    preview.gameVersion !== manager.gameVersion || preview.catalogVersion !== manager.catalogVersion) {
  throw new Error('Set the same gameVersion and catalogVersion in modpreview.json and modmanager.json')
}

const datingFiles = await readdir(new URL('audio/dating/', root))
const files = [
  'characters.json', 'modpreview.json', 'modmanager.json', 'index.json',
  'audio/char/index.json', 'audio/cutscene/index.json', 'audio/dating/index.json',
  ...datingFiles.filter(file => /^illust_dating\d+\.json$/.test(file))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .map(file => `audio/dating/${file}`),
]
const manifest = {
  schemaVersion: 1,
  catalogVersion: preview.catalogVersion,
  gameVersion: preview.gameVersion,
  files: await Promise.all(files.map(async path => ({
    path,
    dataVersion: path === 'characters.json' ? characters.version : preview.catalogVersion,
    sha256: createHash('sha256').update(await read(path)).digest('hex'),
  }))),
}

await writeFile(new URL('catalog-manifest.json', root), JSON.stringify(manifest, null, 2) + '\n')
