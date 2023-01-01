/* eslint-disable @next/next/no-html-link-for-pages */
import TestComponent from "../../components/test_component";
import Link from 'next/link';

export default function OtherPage() {
    return <>
      <TestComponent />
      <h1 className="title">
        Other Page
      </h1>
      <h1>
        Link <Link href="/">this page!</Link>
        A <a href="/">this page!</a>
      </h1>
    </>
}