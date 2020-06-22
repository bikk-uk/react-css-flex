/// <reference types="react" />
import {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
  FlexFlowProperty,
} from 'csstype'
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface DisplayProps {
  inline?: boolean
}
interface FlexDirectionProps {
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  flexDirection?: FlexDirectionProperty
}
interface FlexWrapProps {
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  flexWrap?: FlexWrapProperty
}
interface JustifyContentProps {
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  justifyContent?: JustifyContentProperty
}
interface AlignItemsProps {
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  alignItems?: AlignItemsProperty
}
interface AlignContentProps {
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceBetween?: boolean
  alignContentSpaceAround?: boolean
  alignContentStretch?: boolean
  alignContent?: AlignContentProperty
}
interface FlexFlowProps {
  flow?: FlexFlowProperty
}
export interface FlexProps
  extends DivProps,
    DisplayProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps,
    AlignItemsProps,
    AlignContentProps,
    FlexFlowProps {}
export declare type FlexItemProps = DivProps
export {}
