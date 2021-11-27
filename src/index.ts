// Libraries
import type { Property } from 'csstype'

type ContainerProps<ContainerType> = React.DetailedHTMLProps<React.HTMLAttributes<ContainerType>, ContainerType>

export interface IndexableCSS extends React.CSSProperties {
  [key: string]: string | number | undefined
}

type DisplayCSS = {
  // 'display'
  inline?: boolean
}

type FlexDirectionCSS =
  | {
      // 'flex-direction' short
      row?: boolean
      rowReverse?: boolean
      column?: boolean
      columnReverse?: boolean
      flexDirection?: never
    }
  | {
      // 'flex-direction' manual
      row?: never
      rowReverse?: never
      column?: never
      columnReverse?: never
      flexDirection?: Property.FlexDirection
    }

type FlexWrapCSS =
  | {
      // 'flex-wrap' short
      wrap?: boolean
      noWrap?: boolean
      wrapReverse?: boolean
      flexWrap?: never
    }
  | {
      // 'flex-wrap' manual
      wrap?: never
      noWrap?: never
      wrapReverse?: never
      flexWrap?: Property.FlexWrap
    }

type JustifyContentCSS =
  | {
      // 'justify-content' short
      justifyStart?: boolean
      justifyEnd?: boolean
      justifyCenter?: boolean
      justifySpaceBetween?: boolean
      justifySpaceAround?: boolean
      justifyContent?: never
    }
  | {
      // 'justify-content' manual
      justifyStart?: never
      justifyEnd?: never
      justifyCenter?: never
      justifySpaceBetween?: never
      justifySpaceAround?: never
      justifyContent?: Property.JustifyContent
    }

type AlignItemsCSS =
  | {
      // 'align-items' short
      alignItemsStart?: boolean
      alignItemsEnd?: boolean
      alignItemsCenter?: boolean
      alignItemsBaseline?: boolean
      alignItemsStretch?: boolean
      alignItems?: never
    }
  | {
      // 'align-items' manual
      alignItemsStart?: never
      alignItemsEnd?: never
      alignItemsCenter?: never
      alignItemsBaseline?: never
      alignItemsStretch?: never
      alignItems?: Property.AlignItems
    }

type AlignContentCSS =
  | {
      // 'align-content' short
      alignContentStart?: boolean
      alignContentEnd?: boolean
      alignContentCenter?: boolean
      alignContentSpaceBetween?: boolean
      alignContentSpaceAround?: boolean
      alignContentStretch?: boolean
      alignContent?: never
    }
  | {
      // 'align-content' manual
      alignContentStart?: never
      alignContentEnd?: never
      alignContentCenter?: never
      alignContentSpaceBetween?: never
      alignContentSpaceAround?: never
      alignContentStretch?: never
      alignContent?: Property.AlignContent
    }

type FlexFlowCSS = {
  // 'flex-flow'
  flow?: Property.FlexFlow
}

type OrderCSS = {
  // 'order'
  order?: Property.Order
}

type FlexGrowCSS = {
  // 'flex-grow'
  grow?: Property.FlexGrow
}

type FlexShrinkCSS = {
  // 'flex-shrink'
  shrink?: Property.FlexShrink
}

type FlexBasisCSS = {
  // 'flex-basis'
  basis?: Property.FlexBasis
}

type FlexCSS = {
  // 'flex'
  flex?: Property.Flex
}

type GapCSS = {
  // 'gap'
  gap?: Property.Gap
}

type RowGapCSS = {
  // 'row-gap'
  rowGap?: Property.RowGap
}

type ColumnGapCSS = {
  // 'column-gap'
  columnGap?: Property.ColumnGap
}

export type ContainerTags = Pick<
  JSX.IntrinsicElements,
  'div' | 'nav' | 'main' | 'aside' | 'article' | 'header' | 'section' | 'footer'
>

type TagName = {
  // as property for change default div to any html tags
  as?: keyof ContainerTags
}

type AlignSelfCSS =
  | {
      // 'align-self' short
      alignSelfAuto?: boolean
      alignSelfStart?: boolean
      alignSelfEnd?: boolean
      alignSelfCenter?: boolean
      alignSelfBaseline?: boolean
      alignSelfStretch?: boolean
      alignSelf?: never
    }
  | {
      // 'align-self' manual
      alignSelfAuto?: never
      alignSelfStart?: never
      alignSelfEnd?: never
      alignSelfCenter?: never
      alignSelfBaseline?: never
      alignSelfStretch?: never
      alignSelf?: Property.AlignSelf
    }

export type FlexContainerProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> &
  DisplayCSS &
  FlexDirectionCSS &
  FlexWrapCSS &
  JustifyContentCSS &
  AlignItemsCSS &
  AlignContentCSS &
  FlexFlowCSS &
  GapCSS &
  RowGapCSS &
  ColumnGapCSS &
  TagName

export type FlexItemProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> &
  OrderCSS &
  FlexGrowCSS &
  FlexShrinkCSS &
  FlexBasisCSS &
  FlexCSS &
  AlignSelfCSS &
  TagName
