
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Disclosure } from "@headlessui/react";

import { Navbar } from '../components/navbar';
import Station from '../components/station';

export default function Dashboard({ stations }) {
  return (
    <Navbar header="Dashboard">

        <Station />

    </Navbar>

  )
}
