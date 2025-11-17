'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { FiVideo, FiPlay } from 'react-icons/fi'
import { Header } from '../components/Header'

export default function Tutorial() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const gradientBg = useColorModeValue(
    'linear(to-br, blue.50, purple.50, teal.50)',
    'linear(to-br, gray.900, blue.900, purple.900)'
  )
  const placeholderBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <>
      <Header />
      <Box bgGradient={gradientBg} minH="calc(100vh - 64px)">
        <Container maxW="container.xl" py={12}>
          <VStack spacing={12} align="stretch">
            {/* Page Header */}
            <Box textAlign="center" py={8}>
              <Heading
                as="h1"
                size="2xl"
                mb={4}
                bgGradient="linear(to-r, blue.600, purple.600, teal.600)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Video Tutorials
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                Learn how to use STIndex with our comprehensive video tutorials
              </Text>
            </Box>

            {/* Placeholder Section */}
            <Box
              bg={bgColor}
              p={12}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="lg"
              textAlign="center"
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                minH="400px"
                gap={6}
              >
                <Box
                  p={8}
                  borderRadius="full"
                  bg={placeholderBg}
                  color="gray.500"
                >
                  <Icon as={FiVideo} boxSize={20} />
                </Box>
                <Heading size="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
                  Video Tutorials Coming Soon
                </Heading>
                <Text fontSize="md" color="gray.500" maxW="2xl">
                  We're preparing comprehensive video tutorials to help you get the most out of STIndex.
                  Check back soon for step-by-step guides on extracting spatiotemporal information,
                  using the dashboard, and more.
                </Text>
              </Flex>
            </Box>

            {/* Future Tutorial Categories Placeholder */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box
                bg={bgColor}
                p={6}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="md"
                opacity={0.6}
              >
                <Flex align="center" mb={4}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg="blue.100"
                    color="blue.600"
                    _dark={{ bg: 'blue.900', color: 'blue.200' }}
                  >
                    <Icon as={FiPlay} boxSize={6} />
                  </Box>
                  <Heading size="md" ml={3}>
                    Getting Started
                  </Heading>
                </Flex>
                <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                  Introduction to STIndex, installation, and basic setup
                </Text>
              </Box>

              <Box
                bg={bgColor}
                p={6}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="md"
                opacity={0.6}
              >
                <Flex align="center" mb={4}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg="purple.100"
                    color="purple.600"
                    _dark={{ bg: 'purple.900', color: 'purple.200' }}
                  >
                    <Icon as={FiPlay} boxSize={6} />
                  </Box>
                  <Heading size="md" ml={3}>
                    Data Extraction
                  </Heading>
                </Flex>
                <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                  Learn how to extract and process spatiotemporal information
                </Text>
              </Box>

              <Box
                bg={bgColor}
                p={6}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="md"
                opacity={0.6}
              >
                <Flex align="center" mb={4}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg="teal.100"
                    color="teal.600"
                    _dark={{ bg: 'teal.900', color: 'teal.200' }}
                  >
                    <Icon as={FiPlay} boxSize={6} />
                  </Box>
                  <Heading size="md" ml={3}>
                    Dashboard Guide
                  </Heading>
                </Flex>
                <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                  Explore visualization features and interactive analysis tools
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  )
}