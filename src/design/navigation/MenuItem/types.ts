const menuItemSpacing = ["wide", "compact"] as const;

type MenuItemSpacingType = (typeof menuItemSpacing)[number];

export { menuItemSpacing };
export type { MenuItemSpacingType };
