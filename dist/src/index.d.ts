/// <reference types="react" />
import {
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
interface DisplayCSS {
  inline?: boolean
}
interface FlexDirectionCSS {
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  flexDirection?: FlexDirectionProperty
}
interface FlexWrapCSS {
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  flexWrap?: FlexWrapProperty
}
interface JustifyContentCSS {
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  justifyContent?: JustifyContentProperty
}
interface AlignItemsCSS {
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  alignItems?: AlignItemsProperty
}
interface AlignContentCSS {
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceBetween?: boolean
  alignContentSpaceAround?: boolean
  alignContentStretch?: boolean
  alignContent?: AlignContentProperty
}
interface FlexFlowCSS {
  flow?: FlexFlowProperty
}
interface OrderCSS {
  order?: GlobalsNumber
}
interface FlexGrowCSS {
  grow?: GlobalsNumber
}
interface FlexShrinkCSS {
  shrink?: GlobalsNumber
}
interface FlexBasisCSS {
  basis?: FlexBasisProperty<string | 0>
}
interface FlexCSS {
  flex?: FlexProperty<string | 0>
}
interface AlignSelfCSS {
  alignSelfAuto?: boolean
  alignSelfStart?: boolean
  alignSelfEnd?: boolean
  alignSelfCenter?: boolean
  alignSelfBaseline?: boolean
  alignSelfStretch?: boolean
  alignSelf?: AlignSelfProperty
}
export interface FlexContainerProps
  extends DivProps,
    DisplayCSS,
    FlexDirectionCSS,
    FlexWrapCSS,
    JustifyContentCSS,
    AlignItemsCSS,
    AlignContentCSS,
    FlexFlowCSS {}
export interface FlexItemProps
  extends DivProps,
    OrderCSS,
    FlexGrowCSS,
    FlexShrinkCSS,
    FlexBasisCSS,
    FlexCSS,
    AlignSelfCSS {}
export {}
