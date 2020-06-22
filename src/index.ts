// Libraries
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

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface DisplayCSS {
  // 'display'
  inline?: boolean
}

interface FlexDirectionCSS {
  // 'flex-direction' short
  row?: boolean
  rowReverse?: boolean
  column?: boolean
  columnReverse?: boolean
  // 'flex-direction' manual
  flexDirection?: FlexDirectionProperty
}

interface FlexWrapCSS {
  // 'flex-wrap' short
  wrap?: boolean
  noWrap?: boolean
  wrapReverse?: boolean
  // 'flex-wrap' manual
  flexWrap?: FlexWrapProperty
}

interface JustifyContentCSS {
  // 'justify-content' short
  justifyStart?: boolean
  justifyEnd?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  // 'justify-content' manual
  justifyContent?: JustifyContentProperty
}

interface AlignItemsCSS {
  // 'align-items' short
  alignItemsStart?: boolean
  alignItemsEnd?: boolean
  alignItemsCenter?: boolean
  alignItemsBaseline?: boolean
  alignItemsStretch?: boolean
  // 'align-items' manual
  alignItems?: AlignItemsProperty
}

interface AlignContentCSS {
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

interface FlexFlowCSS {
  // 'flex-flow'
  flow?: FlexFlowProperty
}

interface OrderCSS {
  // 'order'
  order?: GlobalsNumber
}

interface FlexGrowCSS {
  // 'flex-grow'
  grow?: GlobalsNumber
}

interface FlexShrinkCSS {
  // 'flex-shrink'
  shrink?: GlobalsNumber
}

interface FlexBasisCSS {
  // 'flex-basis'
  basis?: FlexBasisProperty<string | 0>
}

interface FlexCSS {
  // 'flex'
  flex?: FlexProperty<string | 0>
}

interface AlignSelfCSS {
  // 'align-self' short
  alignSelfAuto?: boolean
  alignSelfStart?: boolean
  alignSelfEnd?: boolean
  alignSelfCenter?: boolean
  alignSelfBaseline?: boolean
  alignSelfStretch?: boolean
  // 'align-self' manual
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
