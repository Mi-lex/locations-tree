interface Item {
	id: number
	parent_id: number | null
	srt: number
	[key: string]: any
}

export interface TreeItem {
	id: number
	parent_id?: number | null
	srt: number
	[key: string]: any | Item[] | TreeItem[]
}

interface LookUp {
	[id: string]: TreeItem
}

const arrayToTree = (items: Item[]): TreeItem => {
	let rootItem: TreeItem = {} as TreeItem

	const lookup: LookUp = {} as LookUp

	for (const item of items) {
		const itemId = item.id
		const parentId = item.parent_id

		if (!lookup.hasOwnProperty(itemId)) {
			lookup[itemId] = { id: 0, srt: 0, children: [] }
		}

		lookup[itemId] = {
			...item,
			children: lookup[itemId].children,
		}

		const TreeItem = lookup[itemId]

		if (parentId === null) {
			rootItem = TreeItem
		} else {
			if (!lookup.hasOwnProperty(parentId)) {
				lookup[parentId] = { id: 0, srt: 0, children: [] }
			}
			lookup[parentId].children.push(TreeItem)
		}
	}

	return rootItem
}

export default arrayToTree
