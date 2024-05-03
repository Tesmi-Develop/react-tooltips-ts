import { Binding, ComponentType } from "@rbxts/react";

export type Aligment = "Right" | "Left" | "Top" | "Bottom";

export type TooltipProps = {
	appear_delay?: number;
	follow_cursor?: boolean;
	aligment?: Aligment;

	absolute_size: Binding<Vector2>;
	absolute_position: Binding<Vector2>;

	component: ComponentType<{
		position: Binding<UDim2>;
		tooltip: TooltipProps;
	}>;
};

export type TooltipConfiguration = Omit<TooltipProps, "absolute_position" | "absolute_size">;

export type TooltipContext = {
	on_tooltip_changed: (handler: (tooltip?: TooltipProps) => void) => () => void;
	change_tooltip: (tooltip?: TooltipProps) => void;
};
