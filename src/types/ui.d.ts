import { AvatarProps as UiAvatarProps } from "./ui/Avatar";

declare namespace UI {
	declare module Header {
		interface AvatarProps extends UiAvatarProps {}
	}
}
