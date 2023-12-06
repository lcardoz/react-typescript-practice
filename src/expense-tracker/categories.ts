// data file to export categories:
// not a constant or read-only array bc you can push new items to array; so we need to add 'as const' (typescript magic)
const categories = ["Groceries", "Utilities", "Entertainment"] as const;

export default categories;