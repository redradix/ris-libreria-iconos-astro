const BASE_URL = "https://api.figma.com/v1"
const FILE_URL = `${BASE_URL}/files/${import.meta.env.FIGMA_PROJECT_ID}`
const IMAGE_URL = `${BASE_URL}/images/${import.meta.env.FIGMA_PROJECT_ID}`
const getImageURLById = (id) => `${IMAGE_URL}?ids=${id}&format=svg`

const HEADERS = {
  "X-Figma-Token": import.meta.env.FIGMA_API_KEY,
}

const figmaFetch = (url) => {
  return fetch(url, {
    headers: HEADERS,
  })
}

export const ENDPOINT = "/api/figma"

async function fetchFigmaFile() {
  const response = await fetch(FILE_URL, {
    headers: HEADERS,
  })
  if (!response.ok) {
    throw new Error(`Error fetching Figma file: ${response.statusText}`)
  }
  return await response.json()
}

async function fetchFigmaImageURL(iconId, format) {
  const response = await fetch(getImageURLById(iconId, format), {
    headers: HEADERS,
  })
  if (!response.ok) {
    throw new Error(`Error fetching Figma image URL: ${response.statusText}`)
  }
  return await response.json()
}

async function fetchIconDataURL(iconURL) {
  const response = await fetch(iconURL, {
    headers: HEADERS,
  })
  if (!response.ok) {
    throw new Error(`Error fetching icon data URL: ${response.statusText}`)
  }
  return await response.text()
}

async function processIcons(icons) {
  const ids = icons.map((icon) => icon.id)
  const imageSVGURLs = await fetchFigmaImageURL(ids.join(","))

  const iconDataPromises = icons.map(async (icon) => {
    try {
      const svgData = await fetchIconDataURL(imageSVGURLs.images[icon.id])

      return {
        name: icon.name,
        svgData,
      }
    } catch (error) {
      console.error("Error processing icon:", error)
    }
  })

  return await Promise.all(iconDataPromises)
}

export default async function handler() {
  try {
    const figmaFile = await fetchFigmaFile()
    const rawIcons = figmaFile.document.children[0].children[0].children
    const icons = await processIcons(rawIcons)

    return icons
  } catch (error) {
    console.error("Error fetching Figma file:", error)
    return { error: "Error fetching Figma file." }
  }
}
