// Libraries
import {
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignContentProperty,
  FlexFlowProperty,
} from 'csstype'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface DisplayProps {
  // 'display'
  inline?: boolean
}

interface FlexDirectionProps {
  // 'flex-direction' short
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  // 'flex-direction' manual
  flexDirection?: FlexDirectionProperty
}

interface FlexWrapProps {
  // 'flex-wrap' short
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  // 'flex-wrap' manual
  flexWrap?: FlexWrapProperty
}

interface JustifyContentProps {
  // 'justify-content' short
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  // 'justify-content' manual
  justifyContent?: JustifyContentProperty
}

interface AlignItemsProps {
  // 'align-items' short
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  // 'align-items' manual
  alignItems?: AlignItemsProperty
}

interface AlignContentProps {
  // 'align-content' short
  alignContentStart?: boolean
  alignContentEnd?: boolean
  alignContentCenter?: boolean
  alignContentSpaceBetween?: boolean
  alignContentSpaceAround?: boolean
  alignContentStretch?: boolean
  // 'align-content' manual
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

export type FlexItemProps = DivProps
