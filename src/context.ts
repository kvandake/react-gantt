import React, { createContext } from 'react'
import GanttStore from './store'
import { DefaultRecordType, Gantt } from './types'

export interface OnRowCallbacks<RecordType = DefaultRecordType> {
  onClick: (record: Gantt.Record<RecordType>) => void
}

export interface GanttContext<RecordType = DefaultRecordType> {
  prefixCls: string
  store: GanttStore
  getBarColor?: (record: Gantt.Record<RecordType>) => {
    backgroundColor: string
    borderColor: string
  }
  showBackToday: boolean
  showUnitSwitch: boolean
  onRow?: OnRowCallbacks<RecordType>
  tableIndent: number
  barHeight: number
  expandIcon?: ({
    level,
    collapsed,
    onClick,
  }: {
    level: number
    collapsed: boolean
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  }) => React.ReactNode
  renderBar?: (barInfo: Gantt.Bar<RecordType>, { width, height }: { width: number; height: number }) => React.ReactNode
  renderInvalidBar?: (element: React.ReactNode, barInfo: Gantt.Bar<RecordType>) => React.ReactNode
  renderGroupBar?: (
    barInfo: Gantt.Bar<RecordType>,
    { width, height }: { width: number; height: number }
  ) => React.ReactNode
  renderBarThumb?: (item: Gantt.Record<RecordType>, type: 'left' | 'right') => React.ReactNode
  onBarClick?: (record: Gantt.Record<RecordType>) => void
  tableCollapseAble: boolean
  scrollTop: boolean | React.CSSProperties
  alwaysShowTaskBar?: boolean
  renderLeftText?: (barInfo: Gantt.Bar<RecordType>) => React.ReactNode
  renderRightText?: (barInfo: Gantt.Bar<RecordType>) => React.ReactNode
  onExpand?: (record: Gantt.Record<RecordType>, collapsed: boolean) => void

  hideTable?: boolean
  TableRowComponent?: React.ReactComponentElement<any> | any
}
const context = createContext<GanttContext>({} as GanttContext)
export default context
