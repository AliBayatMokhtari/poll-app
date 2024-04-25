import { Box, Container, Flex, Heading, IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import useUserStore from "../../store/user.store";
import useThemeStore from "../../store/theme.store";
import logo from "../../assets/images/logo_2.jpeg";
import Avatar from "./Avatar";

export default function Header() {
	const { theme, setTheme } = useThemeStore();
	const username = useUserStore((state) => state.info.username);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Box
			style={{
				backgroundColor: "var(--accent-9)",
				color: "white",
			}}
			py="3"
		>
			<Container>
				<Flex align="center" justify="between">
					<Flex align="center" gap="3">
						<img src={logo} width={40} height={40} style={{ borderRadius: 999999 }} />
						<Heading as="h4" size="5">
							VoxPop
						</Heading>
					</Flex>
					<Flex gap="1">
						{username && <Avatar />}
						<IconButton radius="full" onClick={toggleTheme}>
							{theme === "dark" ? <SunIcon /> : <MoonIcon />}
						</IconButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
