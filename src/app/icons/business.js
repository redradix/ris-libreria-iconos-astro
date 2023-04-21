export const formatIcons = (icons) => {
  const formattedIcons = icons.map(({ name, svgData }) => {
    const [displayName, tag, size] = name.split(" | ")

    const formattedIcon = {
      name: displayName,
      tag,
      size,
      svgData: svgData.replace("<svg", `<svg aria-label="${displayName}"`),
    }

    return formattedIcon
  })

  const groupedByName = formattedIcons.reduce((acc, icon) => {
    const { name, size } = icon

    if (!acc[name]) {
      acc[name] = {}
    }

    acc[name][size] = icon

    return acc
  }, {})

  return groupedByName
}

export const getAvailableSizes = (groupedIcons) => {
  const sizes = new Set()

  for (const iconName in groupedIcons) {
    const icon = groupedIcons[iconName]

    for (const size in icon) {
      sizes.add(size)
    }
  }

  const arrayOfSizes = Array.from(sizes)

  const parseSize = (sizeStr) => {
    const parts = sizeStr.split("-").map((s) => parseInt(s))
    return parts.length === 1 ? [parts[0], parts[0]] : parts
  }

  const sizesAsTuples = arrayOfSizes.map(parseSize)
  const sortedSizes = sizesAsTuples.sort((a, b) => a[0] - b[0] || a[1] - b[1])

  const sizeTupleToString = (sizeTuple) => {
    return sizeTuple[0] === sizeTuple[1]
      ? `${sizeTuple[0]}px`
      : `${sizeTuple[0]}-${sizeTuple[1]}px`
  }

  const sortedArr = sortedSizes.map(sizeTupleToString)

  return sortedArr
}
