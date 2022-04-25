import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "Quicksand,sans-serif",
			bg: mode("gray.200", "gray.800")(props),
		},
	}),
};

export default styles;
