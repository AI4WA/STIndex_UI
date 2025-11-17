'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  HStack,
  useColorModeValue,
  Icon,
  Image,
} from '@chakra-ui/react'
import { useRouter, usePathname } from 'next/navigation'
import { FiHome, FiBarChart2, FiVideo } from 'react-icons/fi'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const activeColor = useColorModeValue('blue.600', 'blue.300')
  const hoverBg = useColorModeValue('gray.100', 'gray.700')

  const isHome = pathname === '/'
  const isDashboard = pathname === '/dashboard'
  const isTutorial = pathname === '/tutorial'

  return (
    <Box
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo and Title */}
          <Flex alignItems="center" gap={3} cursor="pointer" onClick={() => router.push('/')}>
            <Box w={10} h={10}>
              <Image src="/icon.svg" alt="STIndex Logo" w="100%" h="100%" />
            </Box>
            <Heading size="md" bgGradient="linear(to-r, blue.500, teal.500)" bgClip="text">
              STIndex
            </Heading>
          </Flex>

          {/* Navigation */}
          <HStack spacing={2}>
            <Button
              leftIcon={<Icon as={FiHome} />}
              variant={isHome ? 'solid' : 'ghost'}
              colorScheme={isHome ? 'blue' : 'gray'}
              onClick={() => router.push('/')}
              _hover={{ bg: isHome ? undefined : hoverBg }}
              color={isHome ? 'white' : undefined}
            >
              Home
            </Button>
            <Button
              leftIcon={<Icon as={FiBarChart2} />}
              variant={isDashboard ? 'solid' : 'ghost'}
              colorScheme={isDashboard ? 'blue' : 'gray'}
              onClick={() => router.push('/dashboard')}
              _hover={{ bg: isDashboard ? undefined : hoverBg }}
              color={isDashboard ? 'white' : undefined}
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<Icon as={FiVideo} />}
              variant={isTutorial ? 'solid' : 'ghost'}
              colorScheme={isTutorial ? 'blue' : 'gray'}
              onClick={() => router.push('/tutorial')}
              _hover={{ bg: isTutorial ? undefined : hoverBg }}
              color={isTutorial ? 'white' : undefined}
            >
              Tutorial
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
