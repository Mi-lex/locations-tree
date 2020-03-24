import React, { useState } from 'react'
import TreeItemList from '../TreeItemList'
import { TreeItem as ITreeItem } from '../../helper'
import classes from './TreeItem.module.scss'

type TreeItemProps = {
	title: string
	children?: ITreeItem[]
}

const TreeItem: React.FC<TreeItemProps> = ({ title, children = null }) => {
	const [childrenVisibility, setChildrenVisibility] = useState(true)

	const toggleChildren = (): void => {
		setChildrenVisibility(!childrenVisibility)
	}

	return children?.length ? (
		<li>
			<button className={classes.treeItemParent} onClick={toggleChildren}>
				{title}
				{childrenVisibility ? '<' : '+'}
			</button>
			{children && (
				<TreeItemList hidden={!childrenVisibility}>
					{children
						.sort(({ srt: srtA }, { srt: srtB }) => srtA - srtB)
						.map(({ id, title, children }) => (
							<TreeItem key={id} title={title} children={children} />
						))}
				</TreeItemList>
			)}
		</li>
	) : (
		<li>{title}</li>
	)
}

export default TreeItem
