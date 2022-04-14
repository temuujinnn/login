import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "Nunito Sans",
			bg: mode("gray.200", "gray.800")(props),
		},
	}),
};

export default styles;
