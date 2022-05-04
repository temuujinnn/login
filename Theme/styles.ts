import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "'Rubik', sans-serif",
			bg: mode("brandGray.100", "gray.800")(props),
		},
	}),
};

export default styles;
