import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'dragon-dev-v2',

  projectId: 'ho2oc6x8',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput(), muxInput()],

  schema: {
    types: schemaTypes,
  },
})
