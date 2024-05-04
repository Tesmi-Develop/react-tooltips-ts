import Tooltip from "./Tooltip";
import TooltipDisplay from "./TooltipDisplay";
import TooltipProvider from "./TooltipProvider";
import useTooltip from "./useTooltip";

interface TReactTooltips {
	Tooltip: typeof Tooltip;

	Display: typeof TooltipDisplay;
	Provider: typeof TooltipProvider;

	useTooltip: typeof useTooltip;
}

declare const ReactTooltips: TReactTooltips;

export = ReactTooltips;
