local React = require(script.Parent.React)


export type Alignment = 'Right' | 'Left' | 'Top' | 'Bottom'


export type Tooltip = {
    appear_delay: number?,
    follow_cursor: boolean?,
    alignment: Alignment?,

    absolute_size: React.Binding<Vector2>,
    absolute_position: React.Binding<Vector2>,

    component: React.ComponentType<{
        position: React.Binding<UDim2>,
        tooltip: Tooltip
    }>,

	props: {[string]: any}
}


export type TooltipContext = {
    on_tooltip_changed: ((tooltip: Tooltip?) -> ()) -> (() -> ()),
    change_tooltip: (tooltip: Tooltip?) -> ()
}


return {}