import { createApp } from 'vue'
import App from './App.vue'

// Import icon data from local packages
import { addCollection } from '@iconify/vue'

// Import icon sets
import mdiIcons from '@iconify-json/mdi/icons.json'
import faIcons from '@iconify-json/fa/icons.json'
import biIcons from '@iconify-json/bi/icons.json'
import heroiconsIcons from '@iconify-json/heroicons/icons.json'
import materialSymbolsIcons from '@iconify-json/material-symbols/icons.json'
import carbonIcons from '@iconify-json/carbon/icons.json'
import tablerIcons from '@iconify-json/tabler/icons.json'

// Add collections to Iconify
addCollection(mdiIcons)
addCollection(faIcons)
addCollection(biIcons)
addCollection(heroiconsIcons)
addCollection(materialSymbolsIcons)
addCollection(carbonIcons)
addCollection(tablerIcons)

createApp(App).mount('#app')