import { useRouter } from "next/router";
import Link from "next/link";
import type { GetStaticProps } from "next";

export default function Page({ message }: any) {
	const router = useRouter();
	

	console.log(router.query, 123123123)

	return (
		<div>
			<h1>{message}</h1>
			<Link href="/temp/zxc" shallow={true}>
				Go to other page
			</Link>
			<button
      type="button"
				onClick={() => router.push("/temp/zxc", undefined, { shallow: true })}
			>
				Go to another page
			</button>
		</div>
	);
}



// Page.getInitialProps = async (ctx: any) => {
//   const isServer = typeof window === 'undefined'
//   console.log(`getInitialProps called on ${isServer ? 'server' : 'client'}`)

//   // 클라이언트 사이드 네비게이션에서는 window 객체가 존재합니다
//   if (!isServer) {
//     console.log('Window object is available:', window)
//     console.log(ctx.req, 123123)
//   }

//   // 여기서 데이터를 가져오거나 다른 작업을 수행할 수 있습니다
//   const message = isServer
//     ? 'This message was generated on the server'
//     : 'This message was generated on the client'

//   return { message }
// }

// export default Page
