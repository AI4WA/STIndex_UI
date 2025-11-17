'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Code,
  useColorModeValue,
  Link as ChakraLink,
  HStack,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Flex,
  Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FiExternalLink, FiArrowRight, FiMap, FiClock, FiLayers, FiTrendingUp } from 'react-icons/fi'
import { Header } from './components/Header'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
} from 'recharts'

export default function Home() {
  const router = useRouter()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const codeBlockBg = useColorModeValue('gray.50', 'gray.900')
  const gradientBg = useColorModeValue(
      'linear(to-br, blue.50, purple.50, teal.50)',
      'linear(to-br, gray.900, blue.900, purple.900)'
  )

  // Data for charts
  const temporalData = [
    { model: 'GPT-4o-mini\nBaseline', precision: 67.83, recall: 65.44, f1: 66.61 },
    { model: 'GPT-4o-mini\nSTIndex', precision: 71.05, recall: 68.32, f1: 69.66 },
    { model: 'Qwen3-8B\nBaseline', precision: 59.80, recall: 56.82, f1: 58.27 },
    { model: 'Qwen3-8B\nSTIndex', precision: 67.84, recall: 65.22, f1: 66.50 },
  ]

  const spatialData = [
    { model: 'GPT-4o-mini\nBaseline', precision: 87.11, recall: 65.59, f1: 74.83, mde: 377.32 },
    { model: 'GPT-4o-mini\nSTIndex', precision: 92.00, recall: 67.65, f1: 77.97, mde: 369.02 },
    { model: 'Qwen3-8B\nBaseline', precision: 89.40, recall: 74.63, f1: 81.35, mde: 1371.88 },
    { model: 'Qwen3-8B\nSTIndex', precision: 88.39, recall: 70.03, f1: 78.15, mde: 444.15 },
  ]

  const improvementData = [
    { metric: 'Temporal F1', 'GPT-4o-mini': 4.58, 'Qwen3-8B': 14.13 },
    { metric: 'Spatial F1', 'GPT-4o-mini': 4.20, 'Qwen3-8B': -3.93 },
    { metric: 'Combined F1', 'GPT-4o-mini': 4.37, 'Qwen3-8B': 3.60 },
  ]

  const radarData = [
    { metric: 'Precision', baseline: 67.83, stindex: 71.05 },
    { metric: 'Recall', baseline: 65.44, stindex: 68.32 },
    { metric: 'F1 Score', baseline: 66.61, stindex: 69.66 },
    { metric: 'Spatial Acc', baseline: 74.83, stindex: 77.97 },
    { metric: 'Combined', baseline: 70.72, stindex: 73.81 },
  ]

  return (
      <>
        <Header />
        <Box bgGradient={gradientBg} minH="calc(100vh - 64px)">
          <Container maxW="container.xl" py={12}>
            <VStack spacing={16} align="stretch">
              {/* Hero Section */}
              <Box textAlign="center" py={8}>
                <Heading
                    as="h1"
                    size="3xl"
                    mb={6}
                    bgGradient="linear(to-r, blue.600, purple.600, teal.600)"
                    bgClip="text"
                    fontWeight="extrabold"
                >
                  STIndex
                </Heading>
                <Text fontSize="2xl" color="gray.600" maxW="4xl" mx="auto" fontWeight="medium">
                  A Context-Aware Multi-Dimensional Spatiotemporal Information Extraction System
                </Text>
                <HStack mt={8} spacing={4} justify="center" flexWrap="wrap">
                  <Button
                      size="lg"
                      colorScheme="blue"
                      rightIcon={<Icon as={FiArrowRight} />}
                      onClick={() => router.push('/dashboard')}
                      boxShadow="lg"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                      transition="all 0.2s"
                  >
                    Explore Dashboard
                  </Button>
                  <ChakraLink href="https://github.com/MoeBuTa/STIndex" isExternal>
                    <Button
                        size="lg"
                        variant="outline"
                        colorScheme="purple"
                        rightIcon={<Icon as={FiExternalLink} />}
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                        transition="all 0.2s"
                    >
                      View on GitHub
                    </Button>
                  </ChakraLink>
                </HStack>
              </Box>

              {/* Key Features */}
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                    transition="all 0.3s"
                >
                  <Flex align="center" mb={4}>
                    <Box
                        p={3}
                        borderRadius="lg"
                        bg="blue.100"
                        color="blue.600"
                        _dark={{ bg: 'blue.900', color: 'blue.200' }}
                    >
                      <Icon as={FiLayers} boxSize={6} />
                    </Box>
                    <Heading size="md" ml={3}>
                      Custom Dimensions
                    </Heading>
                  </Flex>
                  <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                    Configurable custom dimensions enabling domain-agnostic spatiotemporal extraction without code changes
                  </Text>
                </Box>

                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                    transition="all 0.3s"
                >
                  <Flex align="center" mb={4}>
                    <Box
                        p={3}
                        borderRadius="lg"
                        bg="purple.100"
                        color="purple.600"
                        _dark={{ bg: 'purple.900', color: 'purple.200' }}
                    >
                      <Icon as={FiClock} boxSize={6} />
                    </Box>
                    <Heading size="md" ml={3}>
                      Context-Aware
                    </Heading>
                  </Flex>
                  <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                    Document-level memory and post-processing tools for resolving ambiguous temporal and spatial references
                  </Text>
                </Box>

                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="md"
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                    transition="all 0.3s"
                >
                  <Flex align="center" mb={4}>
                    <Box
                        p={3}
                        borderRadius="lg"
                        bg="teal.100"
                        color="teal.600"
                        _dark={{ bg: 'teal.900', color: 'teal.200' }}
                    >
                      <Icon as={FiMap} boxSize={6} />
                    </Box>
                    <Heading size="md" ml={3}>
                      Interactive Viz
                    </Heading>
                  </Flex>
                  <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                    Comprehensive dashboard with clustering, burst detection, and entity network analysis
                  </Text>
                </Box>
              </SimpleGrid>

              {/* Abstract Section */}
              <Box
                  bg={bgColor}
                  p={8}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  boxShadow="lg"
              >
                <Heading as="h2" size="lg" mb={6} color="blue.600" _dark={{ color: 'blue.300' }}>
                  Abstract
                </Heading>
                <Text fontSize="md" lineHeight="tall" textAlign="justify" color="gray.700" _dark={{ color: 'gray.300' }}>
                  Extracting structured spatiotemporal information from unstructured web content remains challenging due to
                  entity ambiguity, geocoding errors, and quality control issues. We present STIndex, an end-to-end system
                  that combines context-aware LLM extraction and interactive visualization for multi-dimensional
                  spatiotemporal analysis. Key features include: <Badge colorScheme="blue" mx={1}>(1)</Badge> configurable custom dimensions enabling
                  domain-agnostic spatiotemporal extraction, <Badge colorScheme="purple" mx={1}>(2)</Badge> context-aware extraction pipeline with
                  document-level memory and post-processing tools, and <Badge colorScheme="teal" mx={1}>(3)</Badge> interactive dashboard with
                  spatiotemporal clustering, burst detection, and entity network analysis. We demonstrate STIndex with a
                  public health surveillance case study on real-world health event reports. Evaluation on 500 documents shows
                  context-awareness improves combined F1 by <Badge colorScheme="green">4.37%</Badge> for GPT-4o-mini and <Badge colorScheme="green">3.60%</Badge> for Qwen3-8B.
                </Text>
              </Box>

              {/* System Architecture */}
              <Box
                  bg={bgColor}
                  p={8}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  boxShadow="lg"
              >
                <Heading as="h2" size="lg" mb={6} color="purple.600" _dark={{ color: 'purple.300' }} textAlign="center">
                  System Architecture
                </Heading>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                  <Image
                      src="/stindex-overview.png"
                      alt="STIndex System Architecture Overview"
                      borderRadius="lg"
                      boxShadow="xl"
                      maxW="100%"
                      height="auto"
                  />
                </Box>
              </Box>

              {/* Evaluation Results */}
              <Box>
                <Heading
                    as="h2"
                    size="xl"
                    mb={8}
                    textAlign="center"
                    bgGradient="linear(to-r, blue.600, purple.600)"
                    bgClip="text"
                >
                  Evaluation Results
                </Heading>

                {/* Stats Overview */}
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
                  <Stat
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                  >
                    <StatLabel>Documents Evaluated</StatLabel>
                    <StatNumber color="blue.500">500</StatNumber>
                    <StatHelpText>Synthetic dataset</StatHelpText>
                  </Stat>
                  <Stat
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                  >
                    <StatLabel>GPT-4o-mini Improvement</StatLabel>
                    <StatNumber color="green.500">+4.37%</StatNumber>
                    <StatHelpText>Combined F1 Score</StatHelpText>
                  </Stat>
                  <Stat
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                  >
                    <StatLabel>Qwen3-8B Improvement</StatLabel>
                    <StatNumber color="green.500">+3.60%</StatNumber>
                    <StatHelpText>Combined F1 Score</StatHelpText>
                  </Stat>
                  <Stat
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="md"
                  >
                    <StatLabel>Geocoding Accuracy</StatLabel>
                    <StatNumber color="purple.500">100%</StatNumber>
                    <StatHelpText>Both models</StatHelpText>
                  </Stat>
                </SimpleGrid>

                {/* Charts */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={8}>
                  {/* Temporal Performance */}
                  <Box
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="lg"
                  >
                    <Heading size="md" mb={6} color="blue.600" _dark={{ color: 'blue.300' }}>
                      Temporal Extraction Performance
                    </Heading>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={temporalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="model" tick={{ fontSize: 11 }} />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="precision" fill="#3182CE" name="Precision" />
                        <Bar dataKey="recall" fill="#805AD5" name="Recall" />
                        <Bar dataKey="f1" fill="#38B2AC" name="F1 Score" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  {/* Spatial Performance */}
                  <Box
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="lg"
                  >
                    <Heading size="md" mb={6} color="purple.600" _dark={{ color: 'purple.300' }}>
                      Spatial Extraction Performance
                    </Heading>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={spatialData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="model" tick={{ fontSize: 11 }} />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="precision" fill="#3182CE" name="Precision" />
                        <Bar dataKey="recall" fill="#805AD5" name="Recall" />
                        <Bar dataKey="f1" fill="#38B2AC" name="F1 Score" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  {/* Improvement Comparison */}
                  <Box
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="lg"
                  >
                    <Heading size="md" mb={6} color="teal.600" _dark={{ color: 'teal.300' }}>
                      STIndex Improvement Over Baseline (%)
                    </Heading>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={improvementData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis domain={[-5, 15]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="GPT-4o-mini" fill="#3182CE" name="GPT-4o-mini" />
                        <Bar dataKey="Qwen3-8B" fill="#805AD5" name="Qwen3-8B" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>

                  {/* Radar Chart */}
                  <Box
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="lg"
                  >
                    <Heading size="md" mb={6} color="green.600" _dark={{ color: 'green.300' }}>
                      GPT-4o-mini: Baseline vs STIndex
                    </Heading>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <PolarRadiusAxis domain={[0, 100]} />
                        <Radar name="Baseline" dataKey="baseline" stroke="#E53E3E" fill="#E53E3E" fillOpacity={0.3} />
                        <Radar name="STIndex" dataKey="stindex" stroke="#38A169" fill="#38A169" fillOpacity={0.3} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </Box>
                </SimpleGrid>

                <Box textAlign="center">
                  <ChakraLink
                      href="https://github.com/MoeBuTa/STIndex/blob/main/eval_data/doc_500.json"
                      isExternal
                  >
                    <Button
                        size="lg"
                        colorScheme="purple"
                        rightIcon={<Icon as={FiExternalLink} />}
                        boxShadow="md"
                    >
                      View Synthetic Dataset
                    </Button>
                  </ChakraLink>
                </Box>
              </Box>

              {/* Citation Section */}
              <Box
                  bg={bgColor}
                  p={8}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  boxShadow="lg"
              >
                <Heading as="h2" size="lg" mb={6} color="blue.600" _dark={{ color: 'blue.300' }}>
                  Citation
                </Heading>
                <Text fontSize="md" mb={4} color="gray.700" _dark={{ color: 'gray.300' }}>
                  If you use STIndex in your research, please cite:
                </Text>
                <Box
                    bg={codeBlockBg}
                    p={4}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    overflowX="auto"
                >
                  <Code display="block" whiteSpace="pre-wrap" fontSize="sm" bg="transparent" p={0}>
                    {`@software{stindex2025,
  author = {Zhang, Wenxiao and Liu, Yu and Sun, Qiang and Ding, Yihao and Li, Sirui and Liu, Yanbing and Hong, Jin B. and Liu, Wei},
  title = {STIndex: A Context-Aware Multi-Dimensional Spatiotemporal Information Extraction System},
  year = {2025},
  url = {https://github.com/MoeBuTa/STIndex},
  note = {Open-source spatiotemporal information extraction and visualization system}
}`}
                  </Code>
                </Box>
              </Box>

              {/* Footer */}
              <Box textAlign="center" py={8} borderTop="1px" borderColor={borderColor}>
                <Text fontSize="sm" color="gray.500">
                  STIndex © 2025 | Open Source Project
                </Text>
              </Box>
            </VStack>
          </Container>
        </Box>
      </>
  )
}

