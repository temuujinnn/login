import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "'Rubik', sans-serif",
			bg: mode("#F6F6F6", "gray.800")(props),
		},
	}),
};

export default styles;
