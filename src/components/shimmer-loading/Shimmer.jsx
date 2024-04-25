import { Skeleton } from "@radix-ui/themes";

/**
 *
 * @param {import("@radix-ui/themes").SkeletonProps} props
 */
export default function Shimmer({ children, ...r }) {
	return <Skeleton {...r}>{children}</Skeleton>;
}
