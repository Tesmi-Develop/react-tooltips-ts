import { Binding, ComponentType } from "@rbxts/react";

export type Alignment = "Right" | "Left" | "Top" | "Bottom";

type Omit2<T, K> = { [P in Exclude<keyof T, K>]: T[P] };
type ExcludeBaseProps<T extends {}> = Omit2<T, "position" | "tooltip">;

export type TooltipProps<T extends {} = {}> = {
	appear_delay?: number;
	follow_cursor?: boolean;
	alignment?: Alignment;

	absolute_size: Binding<Vector2>;
	absolute_position: Binding<Vector2>;

	component: ComponentType<
		{
			position: Binding<UDim2>;
			tooltip: TooltipProps;
		} & T
	>;
} & (keyof ExcludeBaseProps<T> extends never ? {} : { props: ExcludeBaseProps<T> });

export type TooltipConfiguration<T extends {}> = Omit<TooltipProps<T>, "absolute_position" | "absolute_size">;

export type TooltipContext = {
	on_tooltip_changed: (handler: (tooltip?: TooltipProps<{}>) => void) => () => void;
	change_tooltip: (tooltip?: TooltipProps<{}>) => void;
};
