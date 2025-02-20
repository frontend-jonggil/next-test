import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Qq() {
	const router = useRouter();
	console.log(router.query, router.isReady);

	return (
		<div>
			{/* <Link href={"/temp"} shallow={true}>
				다시 temp로
			</Link> */}

      {router.query.temp}
		</div>
	);
}

// export const getServerSideProps: GetServerSideProps = async (
// 	ctx: GetServerSidePropsContext,
// ) => {
// 	console.log("나는 어드민");

// 	return {
// 		props: {},
// 	};
// };
