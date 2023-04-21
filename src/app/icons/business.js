export const formatIcons = (icons) => {
  const formattedIcons = icons.map(({ name, svgData }) => {
    const [displayName, tag, size] = name.split(" | ");

    const formattedIcon = {
      name: displayName,
      tag,
      size,
      svgData: svgData.replace("<svg", `<svg aria-label="${displayName}"`)
    };

    return formattedIcon;
  });

  const groupedByName = formattedIcons.reduce((acc, icon) => {
    const { name, size } = icon;

    if (!acc[name]) {
      acc[name] = {};
    }

    acc[name][size] = icon;

    return acc;
  }, {});

  return groupedByName;
};

export const getAvailableSizes = (groupedIcons) => {
  const sizes = new Set();

  for (const iconName in groupedIcons) {
    const icon = groupedIcons[iconName];

    for (const size in icon) {
      sizes.add(size);
    }
  }

  return Array.from(sizes);
};
