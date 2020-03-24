import React from 'react'
import classes from './TreeItemList.module.scss'

type TreeItemListProps = {
	hidden?: boolean
}

const TreeItemList: React.FC<TreeItemListProps> = ({
	hidden = false,
	children,
}) => {
	return (
		<ul hidden={hidden} className={classes.list}>
			{children}
		</ul>
	)
}

export default TreeItemList
