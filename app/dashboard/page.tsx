'use client'

import dynamic from 'next/dynamic'
import { Center, Spinner, Box } from '@chakra-ui/react'
import { Header } from '../components/Header'

// Disable SSR for the entire dashboard to avoid Chakra UI hydration issues
const DashboardContent = dynamic(() => import('../components/DashboardContent'), {
  ssr: false,
  loading: () => (
    <Center minH="100vh" bg="gray.50">
      <Spinner size="xl" color="blue.500" thickness="4px" />
    </Center>
  ),
})

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <DashboardContent />
    </Box>
  )
}
