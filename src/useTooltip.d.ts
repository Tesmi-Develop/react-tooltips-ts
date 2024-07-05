import { TooltipConfiguration } from "./types";

type UpdateAbsoluteSize = (rbx: GuiBase2d | Vector2) => void;
type UpdateAbsolutePosition = (rbx: GuiBase2d | Vector2) => void;
type MouseEnter = () => void;
type MouseLeave = () => void;

declare const useTooltip: (
	config: TooltipConfiguration,
) => LuaTuple<[UpdateAbsoluteSize, UpdateAbsolutePosition, MouseEnter, MouseLeave]>;

export = useTooltip;
