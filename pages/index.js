import Head from 'next/head'

import { Disclosure } from "@headlessui/react";

import { Navbar } from '../components/navbar';
import Dashboard from './dashboard';

// TODO: routing, basic components, auth -> graph

export default function Home({ stations }) {
  return (
      <Dashboard />
  )
}

// export async function getServerSideProps() {
//   const stations = await getQuery('data-stations')
//   return {
//     props: {
//       stations
//     }
//   }
// }