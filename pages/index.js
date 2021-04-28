import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Disclosure } from "@headlessui/react";

import { fetchQuery } from '../utils'
import { Navbar } from '../components/navbar';
import Dashboard from './dashboard';

// TODO: routing, basic components, auth -> graph

export default function Home({ stations }) {
  return (
    <Dashboard />
  )
}

export async function getServerSideProps() {
  const stations = await fetchQuery('data-stations')
  return {
    props: {
      stations
    }
  }
}