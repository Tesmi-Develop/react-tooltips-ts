# 🏷 React-Tooltips
This library is created to display different hints when hovering over elements, created specially for React-Lua

# ☄️ Installation

## NPM(https://www.npmjs.com/package/@rbxts/react-tooltips)
``npm i @rbxts/react-tooltips``

# 📚 Documentation

## Provider
First thing you need is creating Tooltip provider

```tsx
<ReactTooltips.Provider><ReactTooltips.Provider>
```

## Display

Now you need to create display to display hints

```tsx
<ReactTooltips.Provider>
	<ReactTooltips.Display key={"display"} ZIndex={9999} />
</ReactTooltips.Provider>
```

ZIndex is optional, so you don't have to specify it.

## Tooltip

Now you can create tooltips!

But first you need to create hint element, that will display on hover

```tsx
function hint(props: { position: React.Binding<UDim2> }) {
	const [state, setState] = React.useState(1);

	React.useEffect(() => {
		const connnection = UserInputService.InputBegan.Connect((input) => {
			if (input.UserInputType === Enum.UserInputType.MouseButton1) {
				setState(state + 1);
			}
		});
		
		return () => connection.Disconnect()
	}, [state]);

	return <textlabel 
		Position={props.position} 
		Size={UDim2.fromScale(0.1, 0.1)} 
		Text={`Hello, ${state}!`} 
	/>;
}
```

First way to create tooltip, is to create hitbox

```tsx
<ReactTooltips.Provider>
	<ReactTooltips.Display key={"display"} ZIndex={9999} />
	<imagelabel
		AnchorPoint={new Vector2(0.5, 0.5)}
		Size={UDim2.fromScale(0.25, 0.25)}
		Position={UDim2.fromScale(0.5, 0.5)}
		Image={"asset"}
	>
		<ReactTooltips.Tooltip
			key={"tooltip"} 
			follow_cursor={false} // alignment will not work if follow_cursor enabled
			aligment={"Right"} // Left | Right | Bottom | Top, you need to set alignment or follow_cursor
			appear_delay={1} // optional, appear delay in seconds, will display only after hovering for 1 second
			component={hint} // here you need to put hint component
		/>
	</imagelabel>
</ReactTooltips.Provider>;
```

Second way is using ``useTooltip`` hook, that allow more flexability

```tsx
function ImageTooltip() {
	const [updateAbsolutePosition, updateAbsoluteSize, mouseEnter, mouseLeave] = ReactTooltips.useTooltip({
		follow_cursor: false, // alignment will not work if follow_cursor enabled
		aligment: "Right", // Left | Right | Bottom | Top, you need to set alignment or follow_cursor
		appear_delay: 1, // optional, appear delay in seconds, will display only after hovering for 1 second
		component: hint, // here you need to put hint component
	});

	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={UDim2.fromScale(0.25, 0.25)}
			Image={"asset"}
			Change={{
				AbsolutePosition: updateAbsolutePosition,
				AbsoluteSize: updateAbsoluteSize,
			}}
			Event={{
				MouseEnter: mouseEnter,
				MouseLeave: mouseLeave,
			}}
		/>
	);
}

<ReactTooltips.Provider>
	<ReactTooltips.Display key={"display"} ZIndex={9999} />
	<ImageTooltip />
</ReactTooltips.Provider>;
```

# ❤️ Credits
SUMER (Discord: sumer_real) - library

Tesmi (Discord: tesmi) - typescript port