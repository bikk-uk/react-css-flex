/// <reference types="react" />
import type {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
  FlexFlowProperty,
  GlobalsNumber,
  FlexBasisProperty,
  FlexProperty,
  AlignSelfProperty,
} from 'csstype'
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface IndexableCSS extends React.CSSProperties {
  [key: string]: string | number | undefined
}
declare type DisplayCSS = {
  inline?: boolean
}
declare type FlexDirectionCSS =
  | {
      row?: boolean
      rowReverse?: boolean
      column?: boolean
      columnReverse?: boolean
      flexDirection?: never
    }
  | {
      row?: never
      rowReverse?: never
      column?: never
      columnReverse?: never
      flexDirection?: FlexDirectionProperty
    }
declare type FlexWrapCSS =
  | {
      wrap?: boolean
      noWrap?: boolean
      wrapReverse?: boolean
      flexWrap?: never
    }
  | {
      wrap?: never
      noWrap?: never
      wrapReverse?: never
      flexWrap?: FlexWrapProperty
    }
declare type JustifyContentCSS =
  | {
      justifyStart?: boolean
      justifyEnd?: boolean
      justifyCenter?: boolean
      justifySpaceBetween?: boolean
      justifySpaceAround?: boolean
      justifyContent?: never
    }
  | {
      justifyStart?: never
      justifyEnd?: never
      justifyCenter?: never
      justifySpaceBetween?: never
      justifySpaceAround?: never
      justifyContent?: JustifyContentProperty
    }
declare type AlignItemsCSS =
  | {
      alignItemsStart?: boolean
      alignItemsEnd?: boolean
      alignItemsCenter?: boolean
      alignItemsBaseline?: boolean
      alignItemsStretch?: boolean
      alignItems?: never
    }
  | {
      alignItemsStart?: never
      alignItemsEnd?: never
      alignItemsCenter?: never
      alignItemsBaseline?: never
      alignItemsStretch?: never
      alignItems?: AlignItemsProperty
    }
declare type AlignContentCSS =
  | {
      alignContentStart?: boolean
      alignContentEnd?: boolean
      alignContentCenter?: boolean
      alignContentSpaceBetween?: boolean
      alignContentSpaceAround?: boolean
      alignContentStretch?: boolean
      alignContent?: never
    }
  | {
      alignContentStart?: never
      alignContentEnd?: never
      alignContentCenter?: never
      alignContentSpaceBetween?: never
      alignContentSpaceAround?: never
      alignContentStretch?: never
      alignContent?: AlignContentProperty
    }
declare type FlexFlowCSS = {
  flow?: FlexFlowProperty
}
declare type OrderCSS = {
  order?: GlobalsNumber
}
declare type FlexGrowCSS = {
  grow?: GlobalsNumber
}
declare type FlexShrinkCSS = {
  shrink?: GlobalsNumber
}
declare type FlexBasisCSS = {
  basis?: FlexBasisProperty<string | 0>
}
declare type FlexCSS = {
  flex?: FlexProperty<string | 0>
}
declare type AlignSelfCSS =
  | {
      alignSelfAuto?: boolean
      alignSelfStart?: boolean
      alignSelfEnd?: boolean
      alignSelfCenter?: boolean
      alignSelfBaseline?: boolean
      alignSelfStretch?: boolean
      alignSelf?: never
    }
  | {
      alignSelfAuto?: never
      alignSelfStart?: never
      alignSelfEnd?: never
      alignSelfCenter?: never
      alignSelfBaseline?: never
      alignSelfStretch?: never
      alignSelf?: AlignSelfProperty
    }
export declare type FlexContainerProps = DivProps &
  DisplayCSS &
  FlexDirectionCSS &
  FlexWrapCSS &
  JustifyContentCSS &
  AlignItemsCSS &
  AlignContentCSS &
  FlexFlowCSS
export declare type FlexItemProps = DivProps &
  OrderCSS &
  FlexGrowCSS &
  FlexShrinkCSS &
  FlexBasisCSS &
  FlexCSS &
  AlignSelfCSS
export {}
