import React, { useState, useEffect } from 'react'
import arrayToTree, { TreeItem as ITreeItem } from './helper'
import TreeItem from './components/TreeItem'
import TreeItemList from './components/TreeItemList'

const url = 'https://rcslabs.ru/locations.json'

const App: React.FC = () => {
	const [tree, setTree] = useState<Partial<ITreeItem>>({})

	useEffect(() => {
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((flatTree) => {
				setTree(arrayToTree(flatTree))
			})
			.catch(alert)
	}, [])

	return (
		<div className="App">
			<TreeItemList>
				<TreeItem title={tree.title} children={tree.children} />
			</TreeItemList>
		</div>
	)
}

export default App
