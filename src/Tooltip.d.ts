import { Element } from "@rbxts/react";
import { TooltipConfiguration } from "./types";

declare const Tooltip: <T extends {}>(props: TooltipConfiguration<T>) => Element;
export = Tooltip;
