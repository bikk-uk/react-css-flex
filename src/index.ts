// Libraries
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

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

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
      flexDirection?: FlexDirectionProperty
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
      flexWrap?: FlexWrapProperty
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
      justifyContent?: JustifyContentProperty
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
      alignItems?: AlignItemsProperty
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
      alignContent?: AlignContentProperty
    }

type FlexFlowCSS = {
  // 'flex-flow'
  flow?: FlexFlowProperty
}

type OrderCSS = {
  // 'order'
  order?: GlobalsNumber
}

type FlexGrowCSS = {
  // 'flex-grow'
  grow?: GlobalsNumber
}

type FlexShrinkCSS = {
  // 'flex-shrink'
  shrink?: GlobalsNumber
}

type FlexBasisCSS = {
  // 'flex-basis'
  basis?: FlexBasisProperty<string | 0>
}

type FlexCSS = {
  // 'flex'
  flex?: FlexProperty<string | 0>
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
      alignSelf?: AlignSelfProperty
    }

export type FlexContainerProps = DivProps &
  DisplayCSS &
  FlexDirectionCSS &
  FlexWrapCSS &
  JustifyContentCSS &
  AlignItemsCSS &
  AlignContentCSS &
  FlexFlowCSS

export type FlexItemProps = DivProps & OrderCSS & FlexGrowCSS & FlexShrinkCSS & FlexBasisCSS & FlexCSS & AlignSelfCSS
